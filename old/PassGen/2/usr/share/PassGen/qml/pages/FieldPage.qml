/*
  Copyright (C) 2013 Jolla Ltd.
  Contact: Thomas Perl <thomas.perl@jollamobile.com>
  All rights reserved.

  You may use this file under the terms of BSD license as follows:

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of the Jolla Ltd nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
  ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
  DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDERS OR CONTRIBUTORS BE LIABLE FOR
  ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import QtQuick 2.0
import Sailfish.Silica 1.0
import "../crypt.js" as CrptMyne

Page {
    id: page01

    // To enable PullDownMenu, place our content in a SilicaFlickable
    SilicaFlickable {
       // header: PageHeader {
        //    title: "Generate Password"
       // }
        anchors.fill: parent

        // PullDownMenu and PushUpMenu must be declared in SilicaFlickable, SilicaListView or SilicaGridView
        PullDownMenu {
            MenuItem {
                text: "Info"//Droped Down Menu
                signal mySignalEmitted
                onClicked: {
                    pageStack.push(Qt.resolvedUrl("Info.qml"))
                }
            }
            MenuItem {
                text: "Generate password"//Droped Down Menu
                signal mySignalEmitted
                onClicked: {
                    onClicked:outText.text =  CrptMyne.func(userText.text, serviceText.text, times.text, maxLen.text, unChar.text)
                }
            }
        }
        // Tell SilicaFlickable the height of its content.
        contentHeight: column.height
        // Place our content in a Column.  The PageHeader is always placed at the top
        // of the page, followed by our content.
        Column {
            id: column
            width: page01.width
            spacing: Theme.paddingLarge
            PageHeader {
                title: "Fill in the fields"
            }
            TextField{
                id: userText
                x: Theme.paddingSmall
                y: Theme.paddingSmall
                text: "Your insignia"
                color: Theme.secondaryColor
                font.pixelSize: Theme.fontSizeMedium
            }
            TextField{
                id: serviceText
                x: Theme.paddingSmall
                y: Theme.paddingSmall
                text: "Service"
                color: Theme.secondaryColor
                font.pixelSize: Theme.fontSizeMedium
            }
            TextField{
                id: times
                x: Theme.paddingSmall
                y: Theme.paddingSmall
                text: "This is my n'th password"
                color: Theme.secondaryColor
                font.pixelSize: Theme.fontSizeMedium
            }
            TextField{
                id: maxLen
                x: Theme.paddingSmall
                y: Theme.paddingSmall
                text: "Maximum length (<16)"
                color: Theme.secondaryColor
                font.pixelSize: Theme.fontSizeMedium
            }
            TextField{
                id: unChar
                x: Theme.paddingSmall
                y: Theme.paddingSmall
                text: "Unwanted characters"
                color: Theme.secondaryColor
                font.pixelSize: Theme.fontSizeMedium
            }
            TextField{
                id: outText
                x: Theme.paddingSmall
                y: Theme.paddingSmall
                text: "Your password"
                color: Theme.primaryColor
                font.pixelSize: Theme.fontSizeMedium
            }
        }
    }
}


