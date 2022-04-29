import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        bottom: 0,
        flexDirection: "column",
        minHeight: "25vh"
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          bottom: 0,
          fontWeight: "bold",
          fontSize: 22,
          textAlign: "center",
          fontStyle: "oblique",
          fontFamily: "Monospace",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800]
        }}
      >
        <Container maxWidth="sm">
          <span className="subhead">Feelings Matter.</span>
          <Typography variant="body1" color="text.primary">
            {" "}
            {new Date().getFullYear()}
            {"  "}
            {"Copyright ©Vimal Gupta - \t"}
            <Link color="inherit" href="https://github.com/vimalgupta24">
              <i class="fa fa-github"></i>
            </Link>{" "}
            <Link color="inherit" href="https://www.facebook.com/ki.zie.26/">
              <i class="fa fa-facebook-f"></i>
            </Link>{" "}
            <Link color="inherit" href="https://www.instagram.com/vmwritings_/">
              <i class="fa fa-instagram"></i>
            </Link>{" "}
            <Link color="inherit" href="https://twitter.com/dcrazy1_">
              <i class="fa fa-twitter"></i>
            </Link>{" "}
            <Link
              color="inherit"
              href="https://www.linkedin.com/in/vimal-gupta/"
            >
              <i class="fa fa-linkedin"></i>
            </Link>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
