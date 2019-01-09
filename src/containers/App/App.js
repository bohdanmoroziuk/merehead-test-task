import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/creators';
import { selectsUsersData, selectPaginationData } from '../../selectors';
import { changeCurrentPage } from '../../actions/creators';
import StatusBar from '../../components/StatusBar/StatusBar';
import Pagination from 'react-pagination-library';
import UserList from '../../components/UserList/UserList';
import Overlay from '../../components/Overlay/Overlay';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import styles from './App.module.css';
import 'react-pagination-library/build/css/index.css';

class App extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const { list, loading, error, currentPage, usersPerPage } = this.props;

        const totalPages = Math.round(list.length / usersPerPage);

        const startIndex = (currentPage - 1) * usersPerPage;
        const endIndex = currentPage * usersPerPage;

        const visibleUsers = list.slice(
            startIndex,
            endIndex
        );

        if (error) {
            return (
                <Overlay>
                    <ErrorMessage
                        text={`Error! ${error.message}`}
                    />
                </Overlay>
            );
        }

        if (loading) {
            return (
                <Overlay>
                    <Loader 
                        type="ThreeDots"
                        color="#2ecc71"
                        height="70"
                        width="70"  
                    />
                </Overlay>
            );
        }

        return (
            <main className={styles.root}>
                <header className={styles.header}>
                    <StatusBar 
                        totalUsers={list.length}
                        currentPage={currentPage}
                        totalPages={totalPages}
                    />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        changeCurrentPage={this.props.changeCurrentPage}
                        theme="square-fill"
                    />
                </header>
                <UserList 
                    users={visibleUsers} 
                />
            </main>
        );
    }
}

const mapStateToProps = state => ({
    ...selectsUsersData(state),
    ...selectPaginationData(state)
});

const mapDispatchToProps = dispatch => ({
    changeCurrentPage: (currentPage) => dispatch(changeCurrentPage(currentPage)),
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);