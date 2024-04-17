<template>
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#pokemonModal"
  >
    Launch demo modal
  </button>

  <!-- Modal -->
  <div
    id="pokemonModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1
            id="exampleModalLabel"
            class="modal-title fs-5"
          >
            BULBASAUR
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          <img
            class="rounded mx-auto d-block"
            src="/images/bulba.png"
          >
          <hr>
          <div>
            <p class="d-inline-flex gap-1">
              <a
                class="btn btn-primary"
                data-bs-toggle="collapse"
                href="#multiCollapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >Info 1</a>
              <button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#multiCollapseExample2"
                aria-expanded="false"
                aria-controls="multiCollapseExample2"
              >
                Info 2
              </button>
            </p>
            <div class="row">
              <div class="col">
                <div
                  id="multiCollapseExample1"
                  class="collapse multi-collapse"
                >
                  <div class="card card-body">
                    Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                  </div>
                </div>
              </div>
              <div class="col">
                <div
                  id="multiCollapseExample2"
                  class="collapse multi-collapse"
                >
                  <div class="card card-body">
                    Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>