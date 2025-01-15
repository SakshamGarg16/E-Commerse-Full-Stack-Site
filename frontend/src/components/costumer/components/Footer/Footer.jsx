import React from "react";
import { Grid, Typography, Button } from "@mui/material";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10">
      <Grid container spacing={4} justifyContent="center">
        {/* Column 1: Company */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-4 text-center">
            Company
          </Typography>
          <div className="flex flex-col items-center">
            <Button color="inherit">About</Button>
            <Button color="inherit">Blog</Button>
            <Button color="inherit">Career</Button>
            <Button color="inherit">Help</Button>
            <Button color="inherit">Contact</Button>
          </div>
        </Grid>

        {/* Column 2: Solutions */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-4 text-center">
            Solutions
          </Typography>
          <div className="flex flex-col items-center">
            <Button color="inherit">Marketing</Button>
            <Button color="inherit">Analytics</Button>
            <Button color="inherit">Commerce</Button>
            <Button color="inherit">Insights</Button>
            <Button color="inherit">Support</Button>
          </div>
        </Grid>

        {/* Column 3: Documentation */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-4 text-center">
            Documentation
          </Typography>
          <div className="flex flex-col items-center">
            <Button color="inherit">Guides</Button>
            <Button color="inherit">Communication</Button>
          </div>
        </Grid>

        {/* Column 4: Legal */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-4 text-center">
            Legal
          </Typography>
          <div className="flex flex-col items-center">
            <Button color="inherit">Claim</Button>
            <Button color="inherit">Privacy</Button>
            <Button color="inherit">Terms</Button>
          </div>
        </Grid>
      </Grid>

      {/* Footer Bottom Section */}
      <div className="text-center mt-10">
        <Typography variant="body2" className="text-gray-400">
          © 2025 Saksham Garg. All rights reserved.
        </Typography>
        <Typography variant="body2" className="text-gray-400">
          Made with love by Me.
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
