import { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { IntegerInput } from './IntegerInput';

export function AddRecipe() {
    const [formData, setFormData] = useState({});
    function handleSubmit(...args) {
        console.log('args', ...args, formData);
        async function saveRecipe() {
            const response = await fetch('http://localhost:3001/recipe', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // body data type must match "Content-Type" header
            });
            console.log(response);
        }
        saveRecipe();
    }

    function handleInputChange(event) {
        console.log('event', event);
        setFormData((data) => ({
            ...data,
            [event.target.name]: event.target.value,
        }));
    }
    return (
        <Form>
            <h1>Add Recipe</h1>
            <Form.Field>
                <label>
                    Author
                    <Form.Input
                        onChange={handleInputChange}
                        type="text"
                        name="authorName"
                    ></Form.Input>
                </label>
            </Form.Field>
            <Form.Field>
                <label>
                    Description
                    <textarea
                        name="description"
                        onChange={handleInputChange}
                    ></textarea>
                </label>
            </Form.Field>
            <Form.Group>
                <Form.Field>
                    <label>Prep Time</label>
                </Form.Field>
                <Form.Field inline>
                    <IntegerInput
                        name="prepHours"
                        onChange={handleInputChange}
                    />
                    <label>h</label>
                </Form.Field>
                <Form.Field inline>
                    <IntegerInput
                        name="prepMinutes"
                        onChange={handleInputChange}
                    />
                    <label>m</label>
                </Form.Field>
            </Form.Group>
            <Form.Group>
                <Form.Field>
                    <label>Cook Time</label>
                </Form.Field>
                <Form.Field inline>
                    <IntegerInput
                        name="cookHours"
                        onChange={handleInputChange}
                    />
                    <label>h</label>
                </Form.Field>
                <Form.Field inline>
                    <IntegerInput
                        name="cookMinutes"
                        onChange={handleInputChange}
                    />
                    <label>m</label>
                </Form.Field>
            </Form.Group>
            <Form.Field>
                <label>
                    <h3>Instructions</h3>
                    <EditableList
                        onChange={handleInputChange}
                        label="Instruction"
                        name="instructions"
                    />
                </label>
            </Form.Field>
            <Form.Field>
                <label>
                    <h3>Ingredients</h3>
                    <EditableList
                        onChange={handleInputChange}
                        label="Ingredient"
                        name="ingredients"
                    />
                </label>
            </Form.Field>
            <Button onClick={handleSubmit}>Save Recipe</Button>
        </Form>
    );
}

function EditableList({ items = [], label, onChange }) {
    function addItem() {}
    return (
        <div>
            {items.map((item) => (
                <div>{item.name}</div>
            ))}
            <Button onClick={addItem}>Add {label}</Button>
        </div>
    );
}
