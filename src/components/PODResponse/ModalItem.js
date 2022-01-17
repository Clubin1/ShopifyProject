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

const ModalItem = ({ title, body }) => {
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
            <Button variant='ghost'>Like Post</Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
       </>
    )
};

export default ModalItem;