import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { Central } from './components/Central';
import { Project } from './components/Project';
import { Sponsor } from './components/Sponsor';
import { Team } from './components/Team';
import { BePartOf } from './components/BePartOf';

import { RedesSociais } from './components/team/RedesSociais';
import { Suporte } from './components/team/Suporte';
import { Colaboradores } from './components/team/Colaboradores';
import { Relacoes } from './components/team/Relacoes';

export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/central">
                <Central />
            </Route>
            <Route exact path="/central/project">
                <Project />
            </Route>
            <Route exact path="/central/sponsor">
                <Sponsor />
            </Route>
            <Route exact path="/central/team">
                <Team />
            </Route>
            <Route exact path="/central/be-part-of">
                <BePartOf />
            </Route>
            <Route exact path="/central/team/redes-sociais">
                <RedesSociais />
            </Route>
            <Route exact path="/central/team/suporte">
                <Suporte />
            </Route>
            <Route exact path="/central/team/colaboradores">
                <Colaboradores />
            </Route>
            <Route exact path="/central/team/relacoes-publicas">
                <Relacoes />
            </Route>
        </Switch>
    );
}