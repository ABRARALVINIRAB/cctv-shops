import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container, Grid } from '@mui/material';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import MyOrders from './MyOrders/MyOrders';
import Payment from './Payment/Payment';
import Review from './Review/Review';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import Home from '../../Home/Home/Home';
import { isAdmin } from '@firebase/util';

import AddAProduct from './AddAProduct/AddAProduct';
import ManageProducts from './ManageProducts/ManageProducts';
import ManageOrders from './ManageOrders/ManageOrders';
import Footer from '../../Shared/Footer/Footer';




const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    let { path, url } = useRouteMatch();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, logOut } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to='/home'>
                <Button color="inherit">Home</Button>
            </Link>
            {
                !admin && <Box>
                    <Link to={`${url}/payment`} style={{ textDecoration: "none", color: "black" }} >
                        <Button color="inherit">Payment</Button>
                    </Link>
                    <Link to={`${url}/myOrder`} style={{ textDecoration: "none", color: "black" }} >
                        <Button color="inherit">My Orders</Button>
                    </Link>

                    <Link to={`${url}/review`} style={{ textDecoration: "none", color: "black" }} >
                        <Button color="inherit">Review</Button>
                    </Link>
                </Box>
            }

            {
                admin && <Box>
                    <Link to={`${url}/makeAdmin`} style={{ textDecoration: "none", color: "black" }} >
                        <Button color="inherit">Make Admin</Button>
                    </Link>
                    <Link to={`${url}/manageAllOrders`} style={{ textDecoration: "none", color: "black" }} >
                        <Button color="inherit">Manage All Orders</Button>
                    </Link>
                    <Link to={`${url}/addAProduct`} style={{ textDecoration: "none", color: "black" }} >
                        <Button color="inherit">Add A Product</Button>
                    </Link>
                    <Link to={`${url}/manageProducts`} style={{ textDecoration: "none", color: "black" }} >
                        <Button color="inherit">Manage Products</Button>
                    </Link>

                </Box>
            }
            <Button onClick={logOut} variant="contained" endIcon={<SendIcon />}>
                LogOut
            </Button>




            {/* <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Container>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <Switch>
                        <Route exact path={path}>
                            <h1>Welcome to Dashboard</h1>
                        </Route>
                        <Route path={`${path}/myOrder`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/manageAllOrders`}>
                            <ManageOrders></ManageOrders>
                        </Route>
                        <Route path={`${path}/addAProduct`}>
                            <AddAProduct></AddAProduct>
                        </Route>
                        <Route path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </Route>
                    </Switch>

                </Box>
            </Box>
            <Footer></Footer>
        </Container>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
