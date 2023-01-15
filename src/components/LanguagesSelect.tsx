import React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import LanguageIcon from "@mui/icons-material/Language";

const actions = [
  {
    id: "gb",
    icon: (
      <img
        loading="lazy"
        width="25"
        src={`https://flagcdn.com/w20/gb.png`}
        srcSet={`https://flagcdn.com/w40/gb.png 2x`}
        alt="English"
      />
    ),
    name: "English - English",
  },
  {
    id: "gr",
    icon: (
      <img
        loading="lazy"
        width="25"
        src={`https://flagcdn.com/w20/gr.png`}
        srcSet={`https://flagcdn.com/w40/gr.png 2x`}
        alt="Greek"
      />
    ),
    name: "Greek - Ελληνικά",
  },
  {
    id: "th",
    icon: (
      <img
        loading="lazy"
        width="25"
        src={`https://flagcdn.com/w20/th.png`}
        srcSet={`https://flagcdn.com/w40/th.png 2x`}
        alt="Thai"
      />
    ),
    name: "Thai - แบบไทย",
  },
];

export default function LanguagesSelcet({ handleLang }: any) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: -60,
        height: 320,
        transform: "translateZ(0px)",
        flexGrow: 1,
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<LanguageIcon />}
        direction="down"
        FabProps={{ sx: { boxShadow: "none" } }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleLang(action.id)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
