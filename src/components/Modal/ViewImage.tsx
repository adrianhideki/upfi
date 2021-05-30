import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent
        bg="pGray.800"
        maxH="600px"
        maxW="900px"
        width="auto"
        height="auto"
      >
        <ModalBody p="0">
          <Image
            src={imgUrl}
            width="auto"
            height="auto"
            maxH="600px"
            maxW="900px"
          />
        </ModalBody>
        <ModalFooter justifyContent="flex-start">Abrir Original</ModalFooter>
      </ModalContent>
    </Modal>
  );
}
