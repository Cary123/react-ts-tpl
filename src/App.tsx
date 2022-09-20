import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface AppProps {
  num?: number;
}
const App = (props: AppProps) => {
  const [num, setNum] = useState(props.num || 0);
  let x = '12';
  return (
    <Box>
      {num}
      {x}
      <Button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +
      </Button>
    </Box>
  );
};
export default App;
