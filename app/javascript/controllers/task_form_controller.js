// app/javascript/controllers/task_form_controller.js

import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["title", "description"]

    initialize() {
        console.log("Task form controller initialized")
    }

    connect() {
        console.log("Task form controller connected")
    }

    disconnect() {
        console.log("Task form controller disconnected")
    }

    fill() {
        this.titleTarget.value = "Test Task"
        this.descriptionTarget.value = "This task was filled using Stimulus"
    }
}
