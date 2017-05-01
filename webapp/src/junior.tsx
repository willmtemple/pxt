/// <reference path="../../typings/globals/react/index.d.ts" />
/// <reference path="../../typings/globals/react-dom/index.d.ts" />
/// <reference path="../../built/pxtlib.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as workspace from "./workspace";
import * as data from "./data";
import * as sui from "./sui";
import * as sounds from "./sounds";
import * as core from "./core";

type ISettingsProps = pxt.editor.ISettingsProps;

export interface JuniorDialogState {
    visible?: boolean;
}

export class JuniorDialog extends data.Component<ISettingsProps, JuniorDialogState> {
    constructor(props: ISettingsProps) {
        super(props);
        this.state = {
            visible: false
        }
    }

    hide() {
        this.setState({ visible: false });
    }

    show() {
        this.setState({ visible: true });
    }

    openChallenges() {
        pxt.tickEvent("junior.challenges");
        this.props.parent.openTutorials();
    }

    openMyProjects() {
        pxt.tickEvent("junior.myprojects");
        //this.props.parent.openProject();
    }

    openCreateNew() {
        pxt.tickEvent("junior.new");
        this.hide();
        this.props.parent.newProject();
    }

    renderCore() {
        const { visible } = this.state;
        const targetTheme = pxt.appTarget.appTheme;

        return (
            <sui.Modal open={this.state.visible} className="juniordialog" size="small"
                onClose={() => this.setState({ visible: false }) } dimmer={true}
                closeIcon={true}
                closeOnDimmerClick closeOnDocumentClick
                >
                <div className="ui grid stackable centered three column padded">
                    <div className="column center aligned juniorcard" onClick={() => this.openChallenges()}>
                        <div className="ui card link">
                            <div className="ui">
                                <i className="grid layout icon circular inverted" style={{fontSize: '80px'}} />
                            </div>
                            <div className="content">
                                {lf("Challenges")}
                            </div>
                        </div>
                    </div>
                    <div className="column center aligned juniorcard" onClick={() => this.openMyProjects()}>
                        <div className="ui card link">
                            <div className="ui">
                                <i className="unordered list icon circular inverted" style={{fontSize: '80px'}} />
                            </div>
                            <div className="content">
                                {lf("My Projects")}
                            </div>
                        </div>
                    </div>
                    <div className="column center aligned juniorcard" onClick={() => this.openCreateNew()}>
                        <div className="ui card link">
                            <div className="ui">
                                <i className="plus icon circular inverted" style={{fontSize: '80px'}} />
                            </div>
                            <div className="content">
                                {lf("Create New")}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui horizontal tiny divided link list juniorfooter">
                    <a target="_blank" className="item" href={targetTheme.privacyUrl}>{lf("Privacy & Cookies") }</a>
                    <a target="_blank" className="item" href={targetTheme.termsOfUseUrl}>{lf("Terms of Use") }</a>
                </div>
            </sui.Modal>
        )
    }
}