import React, { Component } from 'react';

export default class Nav extends Component{
    render(){
        return(
            <div>
                <a href="/" className="navbar-brand text-uppercase">
                <img src="assets/images/Badge.png" alt="Open Sourcery Logo" width={40} height={40} />
                <span className="navbar-brand-text">Open Sourcery</span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="navbar-collapse collapse" id="navbarNav" style={{}}>
                    <ul className="navbar-nav ml-auto">
                        {/*li class="nav-item">
                                            <%#= link_to guild_dashboard_index_path, class: 'nav-link' do %>
                                                Guild
                                            <%# end %>
                                        </li*/}
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/OpenSourceryClub">
                            <span className="fab fa-github" /> GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}