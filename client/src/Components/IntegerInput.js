import { Input } from 'semantic-ui-react';

export function IntegerInput({ value, onChange, name }) {
    return (
        <Input
            min="1"
            step="1"
            type="number"
            value={value}
            onChange={onChange}
            name={name}
            onKeyPress={(event) => event.charCode >= 48 && event.charCode <= 57}
        ></Input>
    );
}
