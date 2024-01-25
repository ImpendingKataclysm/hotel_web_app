import {Component} from "react";
import {
    Form,
    FormGroup,
    Label,
    Input,
} from "reactstrap";

// Form that allows users to select a city
class CitySelect extends Component {
    render() {
        const {cities, select} = this.props;

        return (
            <Form onSubmit={(e) => {
                e.preventDefault();
                select(e.target.citySelect.value);
            }}>
                <FormGroup>
                    <Label for={"citySelect"}>Select City</Label>
                    <Input type={"select"} name={"citySelect"} id={"citySelect"}>
                        {cities.map((city) => (
                            <option key={cities.indexOf(city)}>{city}</option>
                        ))}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Input
                        type={"submit"}
                        className={"btn btn-primary"}
                        value={"View available hotels"}
                    />
                </FormGroup>
            </Form>
        );
    }
}

export default CitySelect;