import React, { Component } from 'react';
import "../App.css";
import "antd/dist/antd.css";
import { Route, Switch } from "react-router-dom";
import Dashboard from '../components/dashboard/Dashboard';
import BookList from '../components/lawBook/BookList';
import BookDetails from '../components/lawBook/BookDetails';
import Client from '../components/client/Client';
import SheduleCalender from '../components/calender/SheduleCalender';
import ScheduleList from '../components/schedule/scheduleList/ScheduleList';
import CaseList from '../components/case/CaseList/CaseList';
import NoteList from '../components/notes/NoteList/NoteList';
import EvidenceList from '../components/evidance/EvidenceList/EvidenceList';
import Settings from '../components/settings/settings';

class RouterLink extends Component {
    render() {
        return ( 
            <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route path="/books" component={BookList} />
                <Route path="/chapter-section" component={BookDetails} />
                <Route path="/clients" component={Client} />
                <Route path="/calender" component={SheduleCalender} />
                <Route path="/schedules" component={ScheduleList} />
                <Route path="/cases" component={CaseList} />
                <Route path="/notes" component={NoteList} />
                <Route path="/evidences" component={EvidenceList} />
                <Route path="/settings" component={Settings} />
            </Switch>
         );
    }
}
 
export default RouterLink;