// import "@hotwired/turbo-rails"
// import * as bootstrap from "bootstrap"
// import { Application } from "@hotwired/stimulus"
// import { definitionsFromContext } from "@hotwired/stimulus-loading"
//
// window.Stimulus = Application.start()
// const context = require.context("controllers", true, /\.js$/)
// Stimulus.load(definitionsFromContext(context))
//

import "@hotwired/turbo-rails"
import * as bootstrap from "bootstrap"
import { Application } from "@hotwired/stimulus"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"

window.Stimulus = Application.start()
// const context = require.context("controllers", true, /\.js$/)
eagerLoadControllersFrom("controllers", Stimulus)
