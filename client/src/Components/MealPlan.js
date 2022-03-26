import { Meal } from "./Meal";

export function MealPlan() {
    return (
        <div>
            <input type="date" name="startDate"></input>
            <input type="date" name="endDate"></input>
            <div class="ui row">
                <div class="ui column"></div>
                <div class="ui column">Breakfast</div>
                <div class="ui column">Lunch</div>
                <div class="ui column">Dinner</div>
            </div>
            <div class="ui row">
                <Meal />
            </div>
        </div>
    );
}
