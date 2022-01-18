import { React, useState, useEffect, useRef } from 'react';

import { Button, Container} from '@chakra-ui/react';

function ClipboardCopy({copyText}) {
    const [isCopied, setIsCopied] = useState(false);

    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    const handleCopyClick = () => {
        copyTextToClipboard(copyText).then(() => { 
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 1500);
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <Container>
            <Button variant="solid" onClick={handleCopyClick}>
                <span>{
                    isCopied ? 'Copied!' : 'Share Post'
                }</span>
            </Button>
        </Container>
    );
}
export default ClipboardCopy;
