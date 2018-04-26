import React, { Component } from 'react';
import { connect } from 'react-redux';
import { googleLogin, twitterLogin } from '../actions/userAction';
import { Button, SVGIcon } from 'react-md';
import NoteCard from './NoteCard';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class Login extends Component {
    componentWillMount() {
        if (this.props.user !== null) {
            // console.log(this.props.history);
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user !== null) {
            nextProps.history.push('/');
        }
    }
 ListAll(){
  return _.map(this.props.notes, (note, key) => {
      return (
          <NoteCard key={key}>

                  <h2>{note.title}</h2>

              <p>{note.body}</p>

          </NoteCard>
      );
  });
}
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 jumbotron" style={{ marginTop: '-20px' }}>
                        <h1>Project  | {new Date().getFullYear()}</h1>
                        <h2>
                            <i>
                                Login with your favourite <b>Social Network</b> to start writting!
                            </i>
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                              {this.ListAll()}
                        <Button floating primary swapTheming onClick={this.props.googleLogin}>
                          favorite
                        </Button>

                        <button className="btn btn-info col-sm-6" onClick={this.props.twitterLogin}>
                            Login with Twitter
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state, onwProps) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, { googleLogin, twitterLogin })(Login);
