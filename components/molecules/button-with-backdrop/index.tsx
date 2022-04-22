import Button from '@atoms/button';
import CallToActionBackDrop from '@atoms/call-to-action-backdrop';

interface ButtonWithBackdropProps {
    className: string;
}
const ButtonWithBackdrop = ({ className }: ButtonWithBackdropProps) => {
    return (
        <div className={className}>
            <CallToActionBackDrop>
                <Button btnType="primary" type="button" label="Button" />
            </CallToActionBackDrop>
        </div>
    );
};

export default ButtonWithBackdrop;
