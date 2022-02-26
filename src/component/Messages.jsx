import React from 'react';
import MESSAGES from '../mock/MockMessages';
import './common/common.css';
import { Fragment } from 'react';

export default function Messages() {
    const messages = MESSAGES;
    const handleDeleteClick = (id) => (event) => {
        console.log(`delete clicked. id = ${id}`)
    };

    return (
        <div position="relative">
            {messages.map(message => (
                <div className="Message-main" key={message.id}>
                    <div className="Message-header">
                        <div name="name" className="bold">
                            {message.name}
                        </div>
                        <div name="email">
                            {message.email}
                        </div>
                        <div className="pad-horizon">
                            <span>·</span>
                        </div>
                        <div name="postedDate">
                            {message.postedDate.toLocaleString()}
                        </div>
                        <button type="button" name="delete" onClick={handleDeleteClick(message.id)}>
                            削除
                        </button>
                    </div>
                    <div className="Message-body">
                        <div name="subject">
                            {message.subject}
                        </div>
                        <div name="content">
                            {message.content.split('\n').map((line, i) => (
                                <Fragment key={i}>{line}<br /></Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}