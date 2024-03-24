    import React from 'react';
    import { Box, Typography } from '@mui/material';
    import { useParams } from 'react-router-dom';
    import SideBar from '../components/SideBar';
    import { centralData } from '../components/data';

    function CurrentCommanding() {
    const { id } = useParams();

    const selectedItem = centralData[0]?.currentCommanding.find(
        (item) => item.id === Number(id)
    );

    if (!selectedItem) {
        return <div>Error: Commanding officer not found.</div>;
    }

    return (
        <SideBar>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '90%'}}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Check if selectedItem.image1 is not undefined */}
            {selectedItem.image && (
                <img src={selectedItem.image} alt="" style={{ width: '50%' }} />
            )}
            <Box sx={{ padding: 20 }}>
                <Typography
                variant="h2"
                sx={{
                color: "#fff",
                fontSize: "4.375rem",
                width: "850px",
                textTransform: "uppercase",
                fontFamily: "Perpetua Light",
                }}
                >
                    {selectedItem.head}
                </Typography>
                <Typography
                variant="h5"
                sx={{
                color: "#fff",
                fontSize: "1.375rem",
                //   width: "850px",
                textTransform: "none",
                fontFamily: "Perpetua Light",
                }}
                >
                    {selectedItem.text}
                </Typography>
            </Box>
            </Box>
        </Box>
        </SideBar>
    );
    }

    export default CurrentCommanding;
