import Input, { InputProp } from '@atoms/input';
import Label, { LabelProps } from '@atoms/input-label';

interface LabelClassName {
    labelClassName?: string;
}
type LabelInputProps = InputProp & LabelProps & LabelClassName;

const LabeledInput = ({
    id,
    name,
    type,
    placeholder,
    htmlFor,
    label,
    error,
    className,
    required,
    value,
    labelClassName,
    handleChange,
}: LabelInputProps) => {
    return (
        <div className={labelClassName}>
            <Label htmlFor={htmlFor} label={label} />
            <Input
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                className={className}
                required={required}
                value={value}
                error={error}
                handleChange={handleChange}
            />
        </div>
    );
};

export default LabeledInput;
