const constValues = {
    tooSmallScreenMinWidth: 600,
    defaultNotifyIconColor: '#555555',
    telegramContactLink: 'https://t.me/XiaofangInternet',
    repoSourceUrl: 'https://raw.githubusercontent.com/fankes/AndroidNotifyIconAdapt/main/',
    feedbackNewNotifyRulesUrl: 'https://github.com/fankes/AndroidNotifyIconAdapt/issues/new?assignees=&labels=To+be+adapted&template=request_notify_icon_adaption.yml'
};

function onPageLoad() {
    pageFunctions.entryArea0.showMainPage();
    pageFunctions.entryArea3.showAuthorize(true);
}

const renderController = {
    generateMarkdownContent: (content) => marked.parse(content),
    setMarkdownContent: (id, content) => {
        $('#' + id).html(renderController.generateMarkdownContent(content));
        $('.markdown-body').find('a').attr({ rel: 'noopener', target: '_blank' });
    },
    setMarkdownStyleDialog: () => {
        $('.mdui-dialog-content').addClass('markdown-body');
    },
    copyToClipboard: (content) => {
        if (typeof navigator == 'undefined' || typeof navigator.clipboard == 'undefined' || navigator.permissions == 'undefined') {
            let placeholder = document.createElement('input');
            placeholder.setAttribute('value', content);
            document.body.appendChild(placeholder);
            placeholder.select();
            document.execCommand('copy');
            document.body.removeChild(placeholder);
        } else navigator.clipboard.writeText(content);
        mdui.snackbar({ message: '已复制' });
    },
    setCookie: (cname, cvalue, exdays) => {
        let d = new Date();
        let expires = 'expires=' + d.toGMTString();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        document.cookie = cname + '=' + cvalue + '; ' + expires;
    },
    getCookie: (cname) => {
        let name = cname + '=';
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return '';
    }
};

const pageController = {
    pageTitles: ['首页', '通知图标优化名单', '贡献通知图标规则'],
    isPageBlocked: false,
    switchToPage: (title, pageId, itemId) => {
        $('#item-main-main').removeClass('mdui-list-item-active');
        $('#item-nfrules-app').removeClass('mdui-list-item-active');
        $('#item-nfrules-miui').removeClass('mdui-list-item-active');
        $('#item-nfrules-coloros').removeClass('mdui-list-item-active');
        $('#item-nfdebug-debug').removeClass('mdui-list-item-active');
        $('#item-contribute-contribute').removeClass('mdui-list-item-active');
        $('#page-main').hide();
        $('#page-notify-rules').hide();
        $('#page-contribute').hide();
        $('#' + pageId).show();
        $('#' + itemId).addClass('mdui-list-item-active');
        pageController.changePageTitle(title);
        pageController.scrollToTop();
    },
    scrollToTop: () => {
        $('body, html, #body-container').scrollTop(0);
    },
    changePageTitle: (title) => {
        $('#page-title-text').html(title);
    },
    showOrHideSyncNoticeIcon: (isShow) => {
        if (isShow) $('#sync-notice-icon').show();
        else $('#sync-notice-icon').hide();
    },
    showOrHideProjectAddressIcon: (isShow) => {
        if (isShow) $('#project-address-icon').show();
        else $('#project-address-icon').hide();
    }
};

const pageFunctions = {
    headerArea0: {
        showSyncNotice: () => {
            mdui.dialog({
                title: '获取通知图标规则',
                content: renderController.generateMarkdownContent(markdownContents.syncNotice),
                buttons: [{ text: '我知道了' }]
            });
            renderController.setMarkdownStyleDialog();
        }
    },
    entryArea0: {
        showMainPage: () => {
            if (pageController.isPageBlocked) return;
            pageController.switchToPage(pageController.pageTitles[0], 'page-main', 'item-main-main');
            pageController.showOrHideSyncNoticeIcon(false);
            pageController.showOrHideProjectAddressIcon(true);
            renderController.setMarkdownContent('page-main-markdown-content', markdownPageContents.home);
        }
    },
    entryArea1: {
        requestDataForApp: () => {
            if (pageController.isPageBlocked) return;
            pageController.switchToPage(pageController.pageTitles[1], 'page-notify-rules', 'item-nfrules-app');
            pageController.showOrHideSyncNoticeIcon(true);
            pageController.showOrHideProjectAddressIcon(window.innerWidth > constValues.tooSmallScreenMinWidth);
            nfDataRequestController.requestData('APP');
        },
        requestDataForSystem: () => {
            if (pageController.isPageBlocked) return;
            mdui.snackbar({ message: '暂未开放，敬请期待' });
        },
        requestDataForMiui: () => {
            if (pageController.isPageBlocked) return;
            pageController.switchToPage(pageController.pageTitles[1], 'page-notify-rules', 'item-nfrules-miui');
            pageController.showOrHideSyncNoticeIcon(true);
            pageController.showOrHideProjectAddressIcon(window.innerWidth > constValues.tooSmallScreenMinWidth);
            nfDataRequestController.requestData('OS/MIUI');
        },
        requestDataForColorOs: () => {
            if (pageController.isPageBlocked) return;
            pageController.switchToPage(pageController.pageTitles[1], 'page-notify-rules', 'item-nfrules-coloros');
            pageController.showOrHideSyncNoticeIcon(true);
            pageController.showOrHideProjectAddressIcon(window.innerWidth > constValues.tooSmallScreenMinWidth);
            nfDataRequestController.requestData('OS/ColorOS');
        }
    },
    entryArea2: {
        feedbackNewNotifyRules: () => {
            window.open(constValues.feedbackNewNotifyRulesUrl, '_blank');
        },
        contributeNotifyRules: () => {
            if (pageController.isPageBlocked) return;
            pageController.switchToPage(pageController.pageTitles[2], 'page-contribute', 'item-contribute-contribute');
            pageController.showOrHideSyncNoticeIcon(false);
            pageController.showOrHideProjectAddressIcon(true);
            renderController.setMarkdownContent('page-contribute-markdown-content', markdownPageContents.contributing);
        },
        debugNotifyRules: () => {
            if (pageController.isPageBlocked) return;
            mdui.snackbar({ message: '暂未开放，敬请期待' });
        }
    },
    entryArea3: {
        contactUs: () => {
            window.open(constValues.telegramContactLink, '_blank');
        },
        showAuthorize: (isShowNolonger) => {
            if (isShowNolonger && renderController.getCookie('auth-show-nolonger')) return;
            mdui.dialog({
                title: '授权说明',
                content: renderController.generateMarkdownContent(markdownContents.authorize),
                buttons: isShowNolonger ? [{
                    text: '今日内不再提示', onClick: () => {
                        renderController.setCookie('auth-show-nolonger', true, 1);
                    }
                }, { text: '我知道了' }] : [{ text: '我知道了' }]
            });
            renderController.setMarkdownStyleDialog();
        },
        showLicense: () => {
            mdui.dialog({
                title: '开放源代码许可',
                content: renderController.generateMarkdownContent(markdownContents.license),
                buttons: [{ text: '我知道了' }]
            });
            renderController.setMarkdownStyleDialog();
        }
    }
};

const nfDataRequestController = {
    requestData: (name) => {
        pageController.isPageBlocked = true;
        $('#loading-icon').show();
        $('#load-fail-text-box').hide();
        $('#data-list').html('');
        $.ajax({
            url: constValues.repoSourceUrl + name + '/NotifyIconsSupportConfig.json',
            method: 'GET',
            dataType: 'json',
            success: (result) => {
                $('#loading-icon').hide();
                pageController.changePageTitle(pageController.pageTitles[1] + '&nbsp(' + result.length + ')');
                result.forEach((element, index) => {
                    let jsonString = encodeURI(JSON.stringify(element, null, 2));
                    $('#data-list').append('<li class="mdui-list-item mdui-ripple" style="white-space: nowrap"' +
                        'onclick="nfDataRequestController.showJsonData(\'' + element.appName + '\', \'' + jsonString + '\')">' +
                        '<div class="round-left-icon-box" style="background-color: ' +
                        (element.iconColor ? element.iconColor.toLowerCase().replace('#ff', '#') : constValues.defaultNotifyIconColor) + '">' +
                        '<img class="round-icon" src="data:image/png;base64,' + element.iconBitmap + '"/>' +
                        '</div>' +
                        '<div class="mdui-list-item-content" style="line-height: 22px">' +
                        '<div class="mdui-list-item-title">' + element.appName + '</div>' +
                        '<div class="mdui-list-item-text mdui-list-item-two-line">' +
                        '<span class="mdui-text-color-theme-text">' + element.packageName + '</span>' +
                        '<br/>' +
                        '<span class="mdui-text-color-theme-text">贡献者：' + element.contributorName + '</span>' +
                        '</div>' +
                        '</div>' +
                        '<i class="mdui-list-item-icon mdui-icon material-icons">' + (element.isEnabled ? (element.isEnabledAll ? 'done_all' : 'done') : 'close') + '</i>' +
                        (window.innerWidth > constValues.tooSmallScreenMinWidth ?
                            ('<span style="margin-left: 5px">' + (element.isEnabled ? (element.isEnabledAll ? '全部替换' : '启用替换') : '禁用替换') + '</span>') : '') +
                        '</li>');
                    if (index < result.length - 1) $('#data-list').append('<li class="mdui-divider-inset mdui-m-y-0"></li>');
                });
                pageController.isPageBlocked = false;
            },
            error: () => {
                $('#loading-icon').hide();
                $('#load-fail-text-box').show();
            }
        });
    },
    showJsonData: (title, jsonUrlS) => {
        let jsonString = decodeURI(jsonUrlS);
        mdui.dialog({
            title: title,
            content: renderController.generateMarkdownContent('```json\n' + jsonString + '\n```'),
            buttons: [{
                text: '复制规则', onClick: () => { renderController.copyToClipboard(jsonString); }
            }, { text: '关闭' }]
        });
        renderController.setMarkdownStyleDialog();
    }
};