import React, { Component } from 'react';
import PhotoContextProvider from './context/PhotoContext';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Item from './components/Item';
import Search from './components/Search';
import NotFound from './components/NotFound';

class App extends Component {
    render() {
        return (
            <PhotoContextProvider>
                <BrowserRouter basename='/'>
                    <div className='container'>
                        <Route render={() => <Header />} />
                        <Switch>
                            <Route
                                exact
                                path='/'
                                render={() => <Redirect to='/mountain' />}
                            />

                            <Route
                                path='/mountain'
                                render={() => <Item searchTerm='mountain' />}
                            />
                            <Route
                                path='/beach'
                                render={() => <Item searchTerm='beach' />}
                            />
                            <Route
                                path='/bird'
                                render={() => <Item searchTerm='bird' />}
                            />
                            <Route
                                path='/food'
                                render={() => <Item searchTerm='food' />}
                            />
                            <Route
                                path='/:searchInput'
                                render={(props) => (
                                    <Search
                                        searchTerm={
                                            props.match.params.searchInput
                                        }
                                    />
                                )}
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </PhotoContextProvider>
        );
    }
}

export default App;
