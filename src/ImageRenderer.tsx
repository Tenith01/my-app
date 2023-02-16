import * as React from 'react';
import { Sprite } from 'pixi.js';
import { useApp, useTick } from '@inlet/react-pixi';

interface ImageRendererProps {
    imageUrl: string;
}

const ImageRenderer: React.FC<ImageRendererProps> = ({ imageUrl }) => {
    const app = useApp();
    const [sprite, setSprite] = React.useState<Sprite | null>(null);

    React.useEffect(() => {
        const newSprite = Sprite.from(imageUrl);
        setSprite(newSprite);
        app.stage.addChild(newSprite);
    }, [app, imageUrl]);

    useTick(() => {
        if (sprite) {
            sprite.rotation += 0.01;
        }
    });

    return null;
};

export default ImageRenderer;
