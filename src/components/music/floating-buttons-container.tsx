import FloatingPaymentButton from "../shared/floating-payment-button";
import FloatingPlaylistButton from "../shared/floating-playlist-button ";

interface FloatingButtonsContainerProps {
  isPlaylistVisible: boolean;
  isPaymentVisible: boolean;
  onRedirectPlaylist: () => void;
  onRedirectPayment: () => void;
}

const FloatingButtonsContainer = ({
  isPlaylistVisible,
  isPaymentVisible,
  onRedirectPlaylist,
  onRedirectPayment,
}: FloatingButtonsContainerProps) => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-4">
      <FloatingPlaylistButton
        onRedirect={onRedirectPlaylist}
        isVisible={isPlaylistVisible}
      />
      <FloatingPaymentButton
        onRedirect={onRedirectPayment}
        isVisible={isPaymentVisible}
      />
    </div>
  );
};

export default FloatingButtonsContainer;
