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
        <Button onClick={onOpen}>Open Modal</Button>
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
            <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
       </>
    )
};

export default ModalItem;