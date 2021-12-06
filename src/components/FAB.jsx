import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import PaletteIcon from "@mui/icons-material/Palette";
import EditIcon from '@mui/icons-material/Edit';
import colors from "../Constants/colors";

export default function FAB() {
    return (
        <SpeedDial
            ariaLabel="SpeedDial Color Picker"
            sx={{ position: "fixed", bottom: 24, right: 24 }}
            icon={<SpeedDialIcon openIcon={<PaletteIcon />} />}
            FabProps={{
                color: "primary"
            }}
        >
            {colors.map((color) => (
                <SpeedDialAction
                    key={color.name}
                    tooltipTitle={color.name}
                    icon={<EditIcon />}
                    FabProps={{
                        sx: {
                            backgroundColor: color.hex,
                            "&:hover": {
                                backgroundColor: color.hex,
                            },
                        },
                    }}
                />
            ))}
        </SpeedDial>
    );
}
