import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, 
    useDisclosure, 
    Button,
    Text
} from '@chakra-ui/react'

import ClipboardCopy from './ClipboardCopy';

const ModalItem = ({ title, body, url }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
       <>
        <a variant="solid" onClick={onOpen}>Read More</a>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Text>
                    {body}
                </Text>
            </ModalBody>

            <ModalFooter>
            <Button colorScheme='purple' mr={3} onClick={onClose}>
                Close
            </Button>
            <ClipboardCopy copyText={url} />
            </ModalFooter>
        </ModalContent>
        </Modal>
       </>
    )
};

export default ModalItem;