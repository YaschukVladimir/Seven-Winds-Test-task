import { Box } from "@mui/material";

type RenderLineProps = {
    level: number;
    childLength: number;
  }
  
  export function RenderLine({level}: RenderLineProps) {
    return (
      Array.from({length: (level - 2)}).map((_, index) => {
        
        return (
          <Box className={`line-${index + 1}`} sx={{
            position: 'absolute',
            height: '100%',
            width: '1px',
            bottom: '34px',
            left: `calc(54px + 16px * ${index * 2})`,
            backgroundColor: 'grey'
          }}></Box>
        )
      })
    )
  }