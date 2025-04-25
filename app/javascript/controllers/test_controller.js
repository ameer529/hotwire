import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["idfield"]

  initialize() {
    console.log("initialize: controller instance created");
  }

  connect() {
    console.log("Test controller connected!")
  }

  disconnect() {
    console.log("Test controller disconnected!")
  }

  targetoutput(e) {
    debugger
    this.idfieldTarget.value = e.data + "Yes" + this.element.dataset.value1
  }
}
