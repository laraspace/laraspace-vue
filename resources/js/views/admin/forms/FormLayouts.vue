<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Form Layouts</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Forms</a></li>
        <li class="breadcrumb-item active">Form Layouts</li>
      </ol>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-header">
            <h6>Basic Form</h6>
          </div>
          <div class="card-body">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputFirstName">First Name</label>
                  <input
                    id="inputFirstName"
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                  >
                </div>
                <div class="form-group col-md-6">
                  <label for="inputLastName">Password</label>
                  <input
                    id="inputLastName"
                    type="password"
                    class="form-control"
                    placeholder="Last Name"
                  >
                </div>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail">Email address</label>
                <input
                  id="exampleInputEmail"
                  type="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                >
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with
                  anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="inputUserName">Username</label>
                <input
                  id="inputUserName"
                  type="text"
                  class="form-control"
                  placeholder="Username"
                >
              </div>
              <div class="form-group">
                <label>Gender</label>
                <div>
                  <div class="form-check form-check-inline">
                    <input
                      id="checkMale"
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      value="male"
                    >
                    <label class="form-check-label" for="checkMale">Male</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      id="checkFemale"
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      value="female"
                    >
                    <label class="form-check-label" for="checkFemale">Female</label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword">Password</label>
                <input
                  id="exampleInputPassword1"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                >
              </div>
              <button class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-header">
            <h6>Horizontal Form</h6>
          </div>
          <div class="card-body">
            <form>
              <div class="form-group row">
                <label for="firstName" class="col-sm-4 col-form-label">First Name</label>
                <div class="col-sm-8">
                  <input
                    id="firstName"
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label for="lastName" class="col-sm-4 col-form-label">Last Name</label>
                <div class="col-sm-8">
                  <input
                    id="lastName"
                    type="text"
                    class="form-control"
                    placeholder="Last Name"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label for="email" class="col-sm-4 col-form-label">Email</label>
                <div class="col-sm-8">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    placeholder="Email"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label for="password" class="col-sm-4 col-form-label">Password</label>
                <div class="col-sm-8">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  >
                </div>
              </div>
              <button class="btn btn-success">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h6>Inline Form</h6>
          </div>
          <div class="card-body">
            <form class="form-inline">
              <div class="form-group">
                <label for="staticEmail2" class="sr-only">Email</label>
                <input
                  id="staticEmail2"
                  type="text"
                  readonly
                  class="form-control-plaintext"
                  value="email@example.com"
                >
              </div>
              <div class="form-group mx-sm-3">
                <label for="inputPassword2" class="sr-only">Password</label>
                <input
                  id="inputPassword2"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                >
              </div>
              <button
                class="btn btn-primary">Confirm identity</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
