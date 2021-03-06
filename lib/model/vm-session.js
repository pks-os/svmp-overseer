/*
 * Copyright 2014 The MITRE Corporation, All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this work except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * author Dave Bryson
 *
 */
'use strict';

module.exports = VMSessionModel;

/**
 *  Define the VMSession Model Schema.
 *
 */
function VMSessionModel(mongoose) {

    // Schema definition
    var VMSessionSchema = new mongoose.Schema({
        username: {
            type: String,
            unique: true,
            required: true
        },
        expireAt: {
            type: Date
        },
        // maintains VM session state; if this is 0 the session is active and the user is connected to the VM,
        // otherwise this is the time the user disconnected
        lastAction: {
            type: Date
        },
        connectTime: {
            type: Date
        }
    });

    return mongoose.model('VMSession', VMSessionSchema);
};