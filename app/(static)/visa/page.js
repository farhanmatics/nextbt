import React from 'react'
import {Plus, SendHorizontal} from 'lucide-react'

const Visa = () => {
  return (
    <div className='pb-20'>
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
      <h1 className="h5">Submit Visa Order</h1>
      <div className="btn-toolbar mb-2 mb-md-0">
        <div className="btn-group me-2">
          <button type="button" className="btn btn-sm btn-outline-secondary">Preview</button>
          <button type="button" className="btn btn-sm btn-outline-secondary">Export/Save</button>
        </div>
      </div>
    </div>
    <div className="card mb-10 pb-10">
      <div className="card-body">
        {/* Order Information */}
        <div className="row align-items-center row-cols-1 row-cols-sm-4 gy-2 pb-4 border-bottom">
          <div className="col">
            <div className="row g-2 align-items-center">
              <div className="col-auto">
                <label for="inputPassword6" className="col-form-label small-font fw-medium">Country</label>
              </div>
              <div className="col-auto">
                <select className="form-select small-font fw-medium" aria-label="Default select example">
                  <option selected>Select Country</option>
                  <option value="1">Thailand</option>
                  <option value="2">Malaysia</option>
                  <option value="3">United Kingdom</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row g-2 align-items-center">
              <div className="col-auto">
                <label for="inputPassword6" className="col-form-label small-font fw-medium">Visa Type</label>
              </div>
              <div className="col-auto">
                <select className="form-select small-font fw-medium" aria-label="Default select example">
                  <option selected>Select..</option>
                  <option value="1">Thailand</option>
                  <option value="2">Malaysia</option>
                  <option value="3">United Kingdom</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row g-2 align-items-center">
              <div className="col-auto">
                <label for="inputPassword6" className="col-form-label small-font fw-medium">Category</label>
              </div>
              <div className="col-auto">
                <select className="form-select small-font fw-medium" aria-label="Default select example">
                  <option selected>Select...</option>
                  <option value="1">Thailand</option>
                  <option value="2">Malaysia</option>
                  <option value="3">United Kingdom</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row g-2 align-items-center">
              <div className="col-auto">
                <label for="inputPassword6" className="col-form-label small-font fw-medium">Traveling Date</label>
              </div>
              <div className="col-auto">
              <input type="date" id="start" className='form-control small-font fw-medium' name="trip-start" value="2023-11-22" min="2023-11-29" max="2024-12-31" />
              </div>
            </div>
          </div>
        </div>

        {/* Traveler Information Heading */}
        <div className="row text-center pt-2">
          <div className="col align-self-center fs-6 fw-bold text-tourista">
            Add Traveler Information
          </div>
        </div>

        {/* Traveler Information Heading */}
        <div className="row text-center pt-1">
          <div className="col align-self-center small-font fw-bold text-decoration-underline">
            Traveler 1
          </div>
        </div>

        {/* Traveler Information */}
        <div className="row justify-content-center row-cols-1 row-cols-sm-2 gy-2 pt-2">
          {/* First Name */}
          <div className="col">
            <div className="mb-3 row">
              <label for="inputPassword" className="col-sm-2 col-form-label small-font fw-medium ">First Name</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword" />
              </div>
            </div>
          </div>
          {/* Last Name */}
          <div className="col">
          <div className="mb-3 row">
              <label for="inputPassword" className="col-sm-2 col-form-label small-font fw-medium ">Last Name</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword" />
              </div>
            </div>
          </div>
          {/* Email */}
          <div className="col">
          <div className="mb-3 row">
              <label for="inputPassword" className="col-sm-2 col-form-label small-font fw-medium ">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputPassword" />
              </div>
            </div>
          </div>
          {/* Phone */}
          <div className="col">
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label small-font fw-medium ">Phone</label>
                <div className="col-sm-10">
                  <input type="phone" className="form-control" id="inputPassword" />
                </div>
            </div>
          </div>
          {/* Passport No */}
          <div className="col">
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label small-font fw-medium ">Passport No</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="inputPassword" />
                </div>
            </div>
          </div>
          {/* Traveler Documents */}
          <div className="col">
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label small-font fw-medium ">Uploads</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="inputPassword" />
                </div>
            </div>
          </div>

          {/* DOB */}
          <div className="col">
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label small-font fw-medium ">DOB</label>
                <div className="col-sm-10">
                <input type="date" id="start" className='form-control small-font fw-medium' name="trip-start" value="2023-11-22" min="1920-11-29" max="2023-12-31" />
                </div>
            </div>
          </div>
          {/* Documents */}
          <div className="col">
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label small-font fw-medium ">Uploaded:</label>
                <div className="col-sm-10">
                  <label for="inputPassword" className="col-sm-2 col-form-label small-font fw-medium ">(none)</label>
                </div>
            </div>
          </div>
          {/* Profession */}
          <div className="col">
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label small-font fw-medium ">Profession</label>
                <div className="col-sm-10">
                <select className="form-select small-font fw-medium" aria-label="Default select example">
                  <option selected>Select...</option>
                  <option value="1">Thailand</option>
                  <option value="2">Malaysia</option>
                  <option value="3">United Kingdom</option>
                </select>
                </div>
            </div>
          </div>
          {/* DOB */}
          <div className="col">
          </div>
        </div>

        {/* Submit buttons */}
        <div className="row gx-5 row-cols-1 row-cols-sm-2">
          <div className="col d-inline-flex gap-2">
            <button type="submit" className="btn btn-primary mb-3 mt-3">
            <Plus size={16} className='pb-1'/>  Add More Traveler</button>
            <button type="submit" className="btn btn-lightPurple text-white mb-3 mt-3 ml-3 pl-3">
            <SendHorizontal size={16} className='pb-1'/>  Submit & Continue</button>
          </div>
        </div>

        {/* Important notes */}
        <div className="row row-cols-1 pt-2">
          <div className="col">
            <h4 className=' fw-medium fs-6'>*Important Notes</h4>
            <ul>
              <li>
              For fastest processing, please ensure all the provided information are as per passport
              </li>
              <li>
              For fastest processing, please ensure all the provided information are as per passport
              </li>
              <li>
              For fastest processing, please ensure all the provided information are as per passport
              </li>
            </ul>
          </div>
        </div>


      </div>
    </div>
    </div>
  )
}

export default Visa