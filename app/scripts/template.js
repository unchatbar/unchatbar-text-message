angular.module('unchatbar-data-chat').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/unchatbar-data-chat/message-box.html',
    "<div class=\"container\">\n" +
    "\n" +
    "    <div class=\"panel panel-primary\">\n" +
    "        <div class=\"panel-body\">\n" +
    "            <ul class=\"chat\">\n" +
    "                <li class=\"left clearfix\" data-ng-repeat=\"message in messageList\">\n" +
    "                            <span class=\"chat-img pull-left\">\n" +
    "                            <img class=\"profile-image\" ng-src=\"{{userMap[message.from].image}}\" width=\"80\">\n" +
    "                        </span>\n" +
    "\n" +
    "                    <div class=\"chat-body clearfix\">\n" +
    "                        <div class=\"header\">\n" +
    "                            <strong class=\"primary-font\">{{userMap[message.from].label}}</strong>\n" +
    "                            <small class=\"pull-right text-muted\">\n" +
    "                                <span class=\"glyphicon glyphicon-time\"></span>\n" +
    "                                {{getFormateDate(message.message.meta.sendStamp) | date:'/dd/MM/yyyy @ H:mm a' :'GMT'}}\n" +
    "                            </small>\n" +
    "\n" +
    "                        </div>\n" +
    "                        <p>\n" +
    "\n" +
    "                            {{message.message.text}}\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"panel-footer\">\n" +
    "            <div class=\"input-group\">\n" +
    "                <input id=\"btn-input\" type=\"text\" data-ng-model=\"text\" class=\"form-control input-sm\"\n" +
    "                       placeholder=\"Type your message here...\"/>\n" +
    "                        <span class=\"input-group-btn\">\n" +
    "                            <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\"\n" +
    "                                    data-ng-click=\"sendTextMessage(userMap,channel);text='';\">\n" +
    "                                Send\n" +
    "                            </button>\n" +
    "                        </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('views/unchatbar-data-chat/unread-message.html',
    "<div>\n" +
    "    <b>unread Message ({{unreadMessageList.length || 0}})</b>\n" +
    "    <div data-ng-repeat=\"message in unreadMessageList\">\n" +
    "        From:{{userMap[message.from].label}} <br>\n" +
    "        Message:{{message.message.text}}\n" +
    "    </div>\n" +
    "</div>"
  );

}]);
