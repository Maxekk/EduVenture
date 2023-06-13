import { useContext } from 'react';
import { globalContext } from '@/context/globalContext';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

type Props = {
    open: Boolean,
    text: String,
    icon: any
}

function MenuOption({open, text, icon}: Props) {
    const { setRoute } = useContext(globalContext);

  return (
    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => {setRoute(text)}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
  )
}

export default MenuOption
