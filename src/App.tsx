// import * as React from 'react';
// import { Stage } from '@inlet/react-pixi';
// import ImageRenderer from './ImageRenderer';
//
// const App: React.FC = () => {
//   return (
//       <Stage>
//         <ImageRenderer imageUrl={'https://lh3.googleusercontent.com/a/AEdFTp6c0bI0cp3DaOssX9a14S5Bgre4L7bc0SwYD-zEIkU=s360-p-rw-no'}/>
//       </Stage>
//   );
// };
//
// export default App;

import React from 'react';
import { Stage, Container, Graphics } from '@inlet/react-pixi';

const App = () => {
    return (
        <Stage width={400} height={400}>
            <Graphics draw={(g) => {
                g.beginFill(0xFF0000);
                g.drawRect(0, 0, 100, 100);
                g.endFill();
            }} />
        </Stage>
    );
};

export default App;