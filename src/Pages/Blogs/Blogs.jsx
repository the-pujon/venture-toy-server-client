import React from "react";

const Blogs = () => {
  return (
    <div>
      {/* 1st question */}
      <div>
        <div className="text-xl font-semibold">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="ml-4">
          An access token is a short-time token that provides temporary access
          to a database or server. On the other hand a refresh token is a
          long-lasting token that used to obtain new access tokens without user
          intervention
          <br />
          When user logged in then an access token granted for user. User send
          this access token to the server and after server verify server send
          back recourses that user wanted. Access token is a short-time token.
          After few time an access token expired then user can not gain any
          resources with same access token so there refresh token used for.
          Refresh token can issue another access token to user when user access
          token expired.
          <br />
          We should store access token and refresh token to our client side
          HTTPonly Cookies or localStorage
        </div>
      </div>
      {/* 2nd Question */}
      <div>
        <div className="text-xl font-semibold">
          Compare SQL and NoSQL databases?
        </div>
        <div className="ml-4">
          <table>
            <thead>
              <tr>
                <th scope="col">SQL Databases</th>
                <th scope="col">NoSQL Databases</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    <li>Structured data model</li>
                    <li>SQL databases are table-based</li>
                    <li>SQL databases are relationalty</li>

                    <li>Supports complex queries with SQL</li>
                    <li>Scaling vertically (adding more hardware resources)</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Flexible data model</li>
                    <li>
                      NoSQL databases are document, key-value, graph, or
                      wide-column stores
                    </li>
                    <li>NoSQL databases are non-relational</li>

                    <li>No structured query language</li>
                    <li>Horizontal scalability (adding more servers)</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Question 3 */}
        <div>
          <div>
            <div className="text-xl font-semibold">
              What is express js? What is Nest JS?
            </div>
            <div className="ml-4">
              Express.js is a popular web application framework for Node.js. It
              used for building APIs and server
              <br />
              Nest.js is a Node.js frameworks like express js and nest.js used
              for building efficient, scalable, and enterprise-grade backend
              applications using Node. js.
            </div>
          </div>
        </div>

        {/* Question 4 */}
        <div>
          <div>
            <div>
              <div className="text-xl font-semibold">
                What is MongoDB aggregate and how does it work?
              </div>
              <div className="ml-4">
                MongoDB aggregation is a operations that process data records
                and return computed results. It collects values from various
                documents and groups them together and then performs different
                types of operations on that grouped data like sum, average,
                minimum, maximum, etc to return a computed result.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
