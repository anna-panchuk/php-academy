import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/home/HomePage';
import CoursesPage from './components/courses/CoursesPage';
import ManageCoursesPage from './components/courses/ManageCoursesPage';
import AboutPage from './components/about/AboutPage';
import AuthorsPage from './components/authors/AuthorsPage';
import ManageAuthorsPage from './components/authors/ManageAuthorsPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="courses" component={CoursesPage}/>
    <Route path="create-course" component={ManageCoursesPage}/>
    <Route path="course/:id" component={ManageCoursesPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="authors" component={AuthorsPage}/>
    <Route path="author/:id" component={ManageAuthorsPage}/>
    </Route>
);