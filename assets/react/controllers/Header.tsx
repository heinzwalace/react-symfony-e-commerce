import React from "react";
import {AppBar, Badge, Grid, IconButton, Toolbar} from "@mui/material";
import { visit } from "../../utils";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StoreIcon from '@mui/icons-material/Store';
// import {ShoppingCartItem} from "../hooks/useShoppingCart";

export default function Header() : React.JSX.Element  {
   
    const showHome = () : void => {
        visit('/');
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container justifyContent="space-between" alignItems="center" style={{ width: '100%' }}>
                    <Grid item>
                        <IconButton edge="start" color="inherit" onClick={showHome}>
                            <StoreIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        {/* <IconButton color="inherit" onClick={showShoppingCart}>
                            <Badge badgeContent={calculateTotalQuantity()} color="secondary">
                                <ShoppingBasketIcon />
                            </Badge>
                        </IconButton> */}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )

}