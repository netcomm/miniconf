



<!DOCTYPE html>
<html lang="en" class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>bootstrap-pagy/run_prettify.js at master · medihack/bootstrap-pagy</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="medihack/bootstrap-pagy" name="twitter:title" /><meta content="bootstrap-pagy - A jQuery plugin that simplifies the usage of the Bootstrap Pagination component." name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/120626?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/120626?v=2&amp;s=400" property="og:image" /><meta content="medihack/bootstrap-pagy" property="og:title" /><meta content="https://github.com/medihack/bootstrap-pagy" property="og:url" /><meta content="bootstrap-pagy - A jQuery plugin that simplifies the usage of the Bootstrap Pagination component." property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="72F6600C:4A6E:6ACB477:53E85BE5" name="octolytics-dimension-request_id" /><meta content="1635229" name="octolytics-actor-id" /><meta content="netcomm" name="octolytics-actor-login" /><meta content="d782c6dbfa2f0f897c7a93bfafea80b1d4821841bec77631ef0036ac99c8b5d2" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="kxYrLqK9Kx/vJsXzk6HJat6cuwm0IYpygKW2u/ioxqoCj9kys36WUaeE+MweZP/jIwEy2Pk5fKQGo9qMZtYYdQ==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-552c62186b3c4c8234a6c1e644620db9c279e080.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-75372d87456b391742dd70d24760ab5c988cadea.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="578b163ff171518e5f8a90209edf4732">

      
  <meta name="description" content="bootstrap-pagy - A jQuery plugin that simplifies the usage of the Bootstrap Pagination component.">


  <meta content="120626" name="octolytics-dimension-user_id" /><meta content="medihack" name="octolytics-dimension-user_login" /><meta content="14845644" name="octolytics-dimension-repository_id" /><meta content="medihack/bootstrap-pagy" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="14845644" name="octolytics-dimension-repository_network_root_id" /><meta content="medihack/bootstrap-pagy" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/medihack/bootstrap-pagy/commits/master.atom" rel="alternate" title="Recent Commits to bootstrap-pagy:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


        <a href="/notifications" aria-label="You have unread notifications" class="notification-indicator tooltipped tooltipped-s" data-hotkey="g n">
        <span class="mail-status unread"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="netcomm"
    data-repo="medihack/bootstrap-pagy"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="medihack/bootstrap-pagy">

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked">
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global">
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    
<ul id="user-links">
  <li>
    <a href="/netcomm" class="name">
      <img alt="netcomm" data-user="1635229" height="20" src="https://avatars1.githubusercontent.com/u/1635229?v=2&amp;s=40" width="20" /> netcomm
    </a>
  </li>

  <li class="new-menu dropdown-toggle js-menu-container">
    <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-arrow"></span>
    </a>

    <div class="new-menu-content js-menu-content">
    </div>
  </li>

  <li>
    <a href="/settings/profile" id="account_settings"
      class="tooltipped tooltipped-s"
      aria-label="Account settings ">
      <span class="octicon octicon-tools"></span>
    </a>
  </li>
  <li>
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ucpyzSg0OH/CSUGSe5/SX7cG80ahgZ0Crur7wxjc9CAJbfg1+2egd40uu/HpQzyvOGTdVBgJV0dEZR1Qn8iE9A==" /></div>
      <button class="sign-out-button tooltipped tooltipped-s" aria-label="Sign out">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>

<div class="js-new-dropdown-contents hidden">
  
<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="https://porter.github.com/new"><span class="octicon octicon-move-right"></span> Import repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="medihack/bootstrap-pagy">This repository</span>
    </li>
      <li>
        <a href="/medihack/bootstrap-pagy/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="VbR5JfKGnaACD6OvnAh+z6rJmboopRXolsm+DwzBoc1a5M+UvuknJn9J/BW9oJMvAQ8LlXbpSaDwIRSMSkCgTw==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="14845644" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/medihack/bootstrap-pagy/watchers">
        2
      </a>
      <a href="/medihack/bootstrap-pagy/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/medihack/bootstrap-pagy/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="oQx00n5U9B6huLmiXXoqAqZlce3wmMrZz1vs4r41f0V/Hg4LlaNocRb2+liRrH0/le7p1LCS8TwC4ic4y7KzVA==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar medihack/bootstrap-pagy">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/medihack/bootstrap-pagy/stargazers">
          6
        </a>
</form>
    <form accept-charset="UTF-8" action="/medihack/bootstrap-pagy/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="WRP2ZXvCF2+MGIQap7WnMF6RR7PuexPx0WpSMsYWsr8yptZwZ1A3bsLprAISPyIRvtIhLsKFUhQp6FMYYZMWqg==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star medihack/bootstrap-pagy">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/medihack/bootstrap-pagy/stargazers">
          6
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/medihack/bootstrap-pagy/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of medihack/bootstrap-pagy to your account" aria-label="Fork your own copy of medihack/bootstrap-pagy to your account" rel="facebox nofollow">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/medihack/bootstrap-pagy/network" class="social-count">1</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/medihack" class="url fn" itemprop="url" rel="author"><span itemprop="title">medihack</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/medihack/bootstrap-pagy" class="js-current-repository js-repo-home-link">bootstrap-pagy</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" data-issue-count-url="/medihack/bootstrap-pagy/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/medihack/bootstrap-pagy" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /medihack/bootstrap-pagy">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/medihack/bootstrap-pagy/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /medihack/bootstrap-pagy/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/medihack/bootstrap-pagy/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /medihack/bootstrap-pagy/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/medihack/bootstrap-pagy/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /medihack/bootstrap-pagy/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/medihack/bootstrap-pagy/pulse/weekly" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /medihack/bootstrap-pagy/pulse/weekly">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/medihack/bootstrap-pagy/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /medihack/bootstrap-pagy/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/medihack/bootstrap-pagy.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/medihack/bootstrap-pagy.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="git@github.com:medihack/bootstrap-pagy.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:medihack/bootstrap-pagy.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/medihack/bootstrap-pagy" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/medihack/bootstrap-pagy" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save medihack/bootstrap-pagy to your computer and use it in GitHub Desktop." aria-label="Save medihack/bootstrap-pagy to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/medihack/bootstrap-pagy/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download medihack/bootstrap-pagy as a zip file"
                   title="Download medihack/bootstrap-pagy as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/medihack/bootstrap-pagy/blob/406ea21dc5a9cad27214a9344ca3a4cd11b317a6/lib/run_prettify.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:5cafbe4751723ca62eb0924e989553ab -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/medihack/bootstrap-pagy/blob/gh-pages/lib/run_prettify.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/medihack/bootstrap-pagy/blob/master/lib/run_prettify.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/medihack/bootstrap-pagy/tree/0.3.0/lib/run_prettify.js"
                 data-name="0.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.3.0">0.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/medihack/bootstrap-pagy/tree/0.2.0/lib/run_prettify.js"
                 data-name="0.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.0">0.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/medihack/bootstrap-pagy/tree/0.1.0/lib/run_prettify.js"
                 data-name="0.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.0">0.1.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/medihack/bootstrap-pagy/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="lib/run_prettify.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/medihack/bootstrap-pagy" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">bootstrap-pagy</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/medihack/bootstrap-pagy/tree/master/lib" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">lib</span></a></span><span class="separator"> / </span><strong class="final-path">run_prettify.js</strong>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/medihack/bootstrap-pagy/contributors/master/lib/run_prettify.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>1906 lines (1765 sloc)</span>
          <span class="meta-divider"></span>
        <span>79.658 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/medihack/bootstrap-pagy/raw/master/lib/run_prettify.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/medihack/bootstrap-pagy/blame/master/lib/run_prettify.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/medihack/bootstrap-pagy/commits/master/lib/run_prettify.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw"
             href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/medihack/bootstrap-pagy/edit/master/lib/run_prettify.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/medihack/bootstrap-pagy/delete/master/lib/run_prettify.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-line-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-line-code js-file-line"><span class="c1">// Copyright (C) 2013 Google Inc.</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-line-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-line-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-line-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-line-code js-file-line"><span class="c1">// Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-line-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-line-code js-file-line"><span class="c1">// you may not use this file except in compliance with the License.</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-line-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-line-code js-file-line"><span class="c1">// You may obtain a copy of the License at</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-line-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-line-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-line-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-line-code js-file-line"><span class="c1">//      http://www.apache.org/licenses/LICENSE-2.0</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-line-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-line-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-line-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-line-code js-file-line"><span class="c1">// Unless required by applicable law or agreed to in writing, software</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-line-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-line-code js-file-line"><span class="c1">// distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-line-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-line-code js-file-line"><span class="c1">// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-line-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-line-code js-file-line"><span class="c1">// See the License for the specific language governing permissions and</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-line-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-line-code js-file-line"><span class="c1">// limitations under the License.</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-line-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L15" class="blob-line-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L16" class="blob-line-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-line-code js-file-line"><span class="c1">// Looks at query parameters to decide which language handlers and style-sheets</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-line-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-line-code js-file-line"><span class="c1">// to load.</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-line-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L19" class="blob-line-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-line-code js-file-line"><span class="c1">// Query Parameter     Format           Effect                        Default</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-line-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-line-code js-file-line"><span class="c1">// +------------------+---------------+------------------------------+--------+</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-line-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-line-code js-file-line"><span class="c1">// | autorun=         | true | false  | If true then prettyPrint()   | &quot;true&quot; |</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-line-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-line-code js-file-line"><span class="c1">// |                  |               | is called on page load.      |        |</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-line-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-line-code js-file-line"><span class="c1">// +------------------+---------------+------------------------------+--------+</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-line-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-line-code js-file-line"><span class="c1">// | lang=            | language name | Loads the language handler   | Can    |</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-line-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-line-code js-file-line"><span class="c1">// |                  |               | named &quot;lang-&lt;NAME&gt;.js&quot;.      | appear |</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-line-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-line-code js-file-line"><span class="c1">// |                  |               | See available handlers at    | many   |</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-line-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-line-code js-file-line"><span class="c1">// |                  |               | http://code.google.com/p/    | times. |</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-line-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-line-code js-file-line"><span class="c1">// |                  |               | google-code-prettify/source/ |        |</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-line-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-line-code js-file-line"><span class="c1">// |                  |               | browse/trunk/src             |        |</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-line-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-line-code js-file-line"><span class="c1">// +------------------+---------------+------------------------------+--------+</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-line-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-line-code js-file-line"><span class="c1">// | skin=            | skin name     | Loads the skin stylesheet    | none.  |</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-line-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-line-code js-file-line"><span class="c1">// |                  |               | named &quot;&lt;NAME&gt;.css&quot;.          |        |</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-line-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-line-code js-file-line"><span class="c1">// |                  |               | http://code.google.com/p/    |        |</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-line-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-line-code js-file-line"><span class="c1">// |                  |               | google-code-prettify/source/ |        |</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-line-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-line-code js-file-line"><span class="c1">// |                  |               | browse/trunk/styles          |        |</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-line-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-line-code js-file-line"><span class="c1">// +------------------+---------------+------------------------------+--------+</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-line-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-line-code js-file-line"><span class="c1">// | callback=        | JS identifier | When &quot;prettyPrint&quot; finishes  | none   |</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-line-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-line-code js-file-line"><span class="c1">// |                  |               | window.exports[js_ident] is  |        |</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-line-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-line-code js-file-line"><span class="c1">// |                  |               | called.                      |        |</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-line-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-line-code js-file-line"><span class="c1">// |                  |               | The callback must be under   |        |</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-line-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-line-code js-file-line"><span class="c1">// |                  |               | exports to reduce the risk   |        |</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-line-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-line-code js-file-line"><span class="c1">// |                  |               | of XSS via query parameter   |        |</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-line-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-line-code js-file-line"><span class="c1">// |                  |               | injection.                   |        |</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-line-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-line-code js-file-line"><span class="c1">// +------------------+---------------+------------------------------+--------+</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-line-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L46" class="blob-line-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-line-code js-file-line"><span class="c1">// Exmaples</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-line-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-line-code js-file-line"><span class="c1">// .../prettify.js?lang=css&amp;skin=sunburst</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-line-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-line-code js-file-line"><span class="c1">//   1. Loads the CSS language handler which can be used to prettify CSS</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-line-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-line-code js-file-line"><span class="c1">//      stylesheets, HTML &lt;style&gt; element bodies and style=&quot;...&quot; attributes</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-line-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-line-code js-file-line"><span class="c1">//      values.</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-line-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-line-code js-file-line"><span class="c1">//   2. Loads the sunburst.css stylesheet instead of the default prettify.css</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-line-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-line-code js-file-line"><span class="c1">//      stylesheet.</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-line-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-line-code js-file-line"><span class="c1">//      A gallery of stylesheets is available at</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-line-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-line-code js-file-line"><span class="c1">//      https://google-code-prettify.googlecode.com/svn/trunk/styles/index.html</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-line-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-line-code js-file-line"><span class="c1">//   3. Since autorun=false is not specified, calls prettyPrint() on page load.</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-line-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L57" class="blob-line-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L58" class="blob-line-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-line-code js-file-line"><span class="cm">/** @define {boolean} */</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-line-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-line-code js-file-line"><span class="kd">var</span> <span class="nx">IN_GLOBAL_SCOPE</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-line-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L61" class="blob-line-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-line-code js-file-line"><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-line-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-line-code js-file-line">  <span class="s2">&quot;use strict&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-line-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L64" class="blob-line-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-line-code js-file-line">  <span class="kd">var</span> <span class="nx">win</span> <span class="o">=</span> <span class="nb">window</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-line-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-line-code js-file-line">  <span class="kd">var</span> <span class="nx">setTimeout</span> <span class="o">=</span> <span class="nx">win</span><span class="p">.</span><span class="nx">setTimeout</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-line-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-line-code js-file-line">  <span class="kd">var</span> <span class="nx">doc</span> <span class="o">=</span> <span class="nb">document</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-line-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-line-code js-file-line">  <span class="kd">var</span> <span class="nx">root</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-line-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-line-code js-file-line">  <span class="kd">var</span> <span class="nx">head</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">[</span><span class="s1">&#39;head&#39;</span><span class="p">]</span> <span class="o">||</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;head&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">]</span> <span class="o">||</span> <span class="nx">root</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-line-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L70" class="blob-line-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-line-code js-file-line">  <span class="c1">// From http://javascript.nwbox.com/ContentLoaded/contentloaded.js</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-line-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-line-code js-file-line">  <span class="c1">// Author: Diego Perini (diego.perini at gmail.com)</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-line-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-line-code js-file-line">  <span class="c1">// Summary: cross-browser wrapper for DOMContentLoaded</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-line-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-line-code js-file-line">  <span class="c1">// Updated: 20101020</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-line-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-line-code js-file-line">  <span class="c1">// License: MIT</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-line-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-line-code js-file-line">  <span class="c1">// Version: 1.2</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-line-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-line-code js-file-line">  <span class="kd">function</span> <span class="nx">contentLoaded</span><span class="p">(</span><span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-line-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">addEventListener</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">[</span><span class="s1">&#39;addEventListener&#39;</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-line-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">done</span> <span class="o">=</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">top</span> <span class="o">=</span> <span class="kc">true</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-line-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-line-code js-file-line">        <span class="nx">add</span> <span class="o">=</span> <span class="nx">addEventListener</span> <span class="o">?</span> <span class="s1">&#39;addEventListener&#39;</span> <span class="o">:</span> <span class="s1">&#39;attachEvent&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-line-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-line-code js-file-line">        <span class="nx">rem</span> <span class="o">=</span> <span class="nx">addEventListener</span> <span class="o">?</span> <span class="s1">&#39;removeEventListener&#39;</span> <span class="o">:</span> <span class="s1">&#39;detachEvent&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-line-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-line-code js-file-line">        <span class="nx">pre</span> <span class="o">=</span> <span class="nx">addEventListener</span> <span class="o">?</span> <span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="s1">&#39;on&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-line-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L83" class="blob-line-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-line-code js-file-line">        <span class="nx">init</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-line-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">type</span> <span class="o">==</span> <span class="s1">&#39;readystatechange&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">!=</span> <span class="s1">&#39;complete&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-line-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-line-code js-file-line">            <span class="k">return</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-line-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-line-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-line-code js-file-line">          <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">type</span> <span class="o">==</span> <span class="s1">&#39;load&#39;</span> <span class="o">?</span> <span class="nx">win</span> <span class="o">:</span> <span class="nx">doc</span><span class="p">)[</span><span class="nx">rem</span><span class="p">](</span><span class="nx">pre</span> <span class="o">+</span> <span class="nx">e</span><span class="p">.</span><span class="nx">type</span><span class="p">,</span> <span class="nx">init</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-line-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">done</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">done</span> <span class="o">=</span> <span class="kc">true</span><span class="p">))</span> <span class="p">{</span> <span class="nx">callback</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">win</span><span class="p">,</span> <span class="nx">e</span><span class="p">.</span><span class="nx">type</span> <span class="o">||</span> <span class="nx">e</span><span class="p">);</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-line-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-line-code js-file-line">        <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-line-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L91" class="blob-line-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-line-code js-file-line">        <span class="nx">poll</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-line-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-line-code js-file-line">          <span class="k">try</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-line-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-line-code js-file-line">            <span class="nx">root</span><span class="p">.</span><span class="nx">doScroll</span><span class="p">(</span><span class="s1">&#39;left&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-line-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-line-code js-file-line">          <span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-line-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-line-code js-file-line">            <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">poll</span><span class="p">,</span> <span class="mi">50</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-line-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-line-code js-file-line">            <span class="k">return</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-line-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-line-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-line-code js-file-line">          <span class="nx">init</span><span class="p">(</span><span class="s1">&#39;poll&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-line-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-line-code js-file-line">        <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-line-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L101" class="blob-line-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-line-code js-file-line">    <span class="k">if</span> <span class="p">(</span><span class="nx">doc</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">==</span> <span class="s1">&#39;complete&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-line-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-line-code js-file-line">      <span class="nx">callback</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">win</span><span class="p">,</span> <span class="s1">&#39;lazy&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-line-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-line-code js-file-line">    <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-line-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">doc</span><span class="p">.</span><span class="nx">createEventObject</span> <span class="o">&amp;&amp;</span> <span class="nx">root</span><span class="p">.</span><span class="nx">doScroll</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-line-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-line-code js-file-line">        <span class="k">try</span> <span class="p">{</span> <span class="nx">top</span> <span class="o">=</span> <span class="o">!</span><span class="nx">win</span><span class="p">.</span><span class="nx">frameElement</span><span class="p">;</span> <span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-line-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">top</span><span class="p">)</span> <span class="p">{</span> <span class="nx">poll</span><span class="p">();</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-line-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-line-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-line-code js-file-line">      <span class="nx">doc</span><span class="p">[</span><span class="nx">add</span><span class="p">](</span><span class="nx">pre</span> <span class="o">+</span> <span class="s1">&#39;DOMContentLoaded&#39;</span><span class="p">,</span> <span class="nx">init</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-line-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-line-code js-file-line">      <span class="nx">doc</span><span class="p">[</span><span class="nx">add</span><span class="p">](</span><span class="nx">pre</span> <span class="o">+</span> <span class="s1">&#39;readystatechange&#39;</span><span class="p">,</span> <span class="nx">init</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-line-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-line-code js-file-line">      <span class="nx">win</span><span class="p">[</span><span class="nx">add</span><span class="p">](</span><span class="nx">pre</span> <span class="o">+</span> <span class="s1">&#39;load&#39;</span><span class="p">,</span> <span class="nx">init</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-line-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-line-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-line-code js-file-line">  <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-line-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L114" class="blob-line-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-line-code js-file-line">  <span class="c1">// Given a list of URLs to stylesheets, loads the first that loads without</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-line-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-line-code js-file-line">  <span class="c1">// triggering an error event.</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-line-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-line-code js-file-line">  <span class="kd">function</span> <span class="nx">loadStylesheetsFallingBack</span><span class="p">(</span><span class="nx">stylesheets</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-line-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">n</span> <span class="o">=</span> <span class="nx">stylesheets</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-line-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-line-code js-file-line">    <span class="kd">function</span> <span class="nx">load</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-line-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">===</span> <span class="nx">n</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-line-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">link</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;link&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-line-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-line-code js-file-line">      <span class="nx">link</span><span class="p">.</span><span class="nx">rel</span> <span class="o">=</span> <span class="s1">&#39;stylesheet&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-line-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-line-code js-file-line">      <span class="nx">link</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;text/css&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-line-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span> <span class="o">&lt;</span> <span class="nx">n</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-line-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-line-code js-file-line">        <span class="c1">// http://pieisgood.org/test/script-link-events/ indicates that many</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-line-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-line-code js-file-line">        <span class="c1">// versions of IE do not support onerror on &lt;link&gt;s, though</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-line-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-line-code js-file-line">        <span class="c1">// http://msdn.microsoft.com/en-us/library/ie/ms535848(v=vs.85).aspx</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-line-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-line-code js-file-line">        <span class="c1">// indicates that recent IEs do support error.</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-line-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-line-code js-file-line">        <span class="nx">link</span><span class="p">.</span><span class="nx">error</span> <span class="o">=</span> <span class="nx">link</span><span class="p">.</span><span class="nx">onerror</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> <span class="nx">load</span><span class="p">(</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span> <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-line-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-line-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-line-code js-file-line">      <span class="nx">link</span><span class="p">.</span><span class="nx">href</span> <span class="o">=</span> <span class="nx">stylesheets</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-line-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-line-code js-file-line">      <span class="nx">head</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">link</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-line-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-line-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-line-code js-file-line">    <span class="nx">load</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-line-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-line-code js-file-line">  <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-line-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L136" class="blob-line-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-line-code js-file-line">  <span class="kd">var</span> <span class="nx">scriptQuery</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-line-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-line-code js-file-line">  <span class="c1">// Look for the &lt;script&gt; node that loads this script to get its parameters.</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-line-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-line-code js-file-line">  <span class="c1">// This starts looking at the end instead of just considering the last</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-line-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-line-code js-file-line">  <span class="c1">// because deferred and async scripts run out of order.</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-line-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-line-code js-file-line">  <span class="c1">// If the script is loaded twice, then this will run in reverse order.</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-line-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-line-code js-file-line">  <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">scripts</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">scripts</span><span class="p">,</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">scripts</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">--</span><span class="nx">i</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-line-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">script</span> <span class="o">=</span> <span class="nx">scripts</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-line-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">match</span> <span class="o">=</span> <span class="nx">script</span><span class="p">.</span><span class="nx">src</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-line-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-line-code js-file-line">        <span class="sr">/^[^?#]*\/run_prettify\.js(\?[^#]*)?(?:#.*)?$/</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-line-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-line-code js-file-line">    <span class="k">if</span> <span class="p">(</span><span class="nx">match</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-line-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-line-code js-file-line">      <span class="nx">scriptQuery</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-line-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-line-code js-file-line">      <span class="c1">// Remove the script from the DOM so that multiple runs at least run</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-line-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-line-code js-file-line">      <span class="c1">// multiple times even if parameter sets are interpreted in reverse</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-line-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-line-code js-file-line">      <span class="c1">// order.</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-line-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-line-code js-file-line">      <span class="nx">script</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">script</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-line-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-line-code js-file-line">      <span class="k">break</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-line-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-line-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-line-code js-file-line">  <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-line-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L155" class="blob-line-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-line-code js-file-line">  <span class="c1">// Pull parameters into local variables.</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-line-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-line-code js-file-line">  <span class="kd">var</span> <span class="nx">autorun</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-line-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-line-code js-file-line">  <span class="kd">var</span> <span class="nx">langs</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-line-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-line-code js-file-line">  <span class="kd">var</span> <span class="nx">skins</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-line-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-line-code js-file-line">  <span class="kd">var</span> <span class="nx">callbacks</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-line-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-line-code js-file-line">  <span class="nx">scriptQuery</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-line-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-line-code js-file-line">      <span class="sr">/[?&amp;]([^&amp;=]+)=([^&amp;]+)/g</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-line-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-line-code js-file-line">      <span class="kd">function</span> <span class="p">(</span><span class="nx">_</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-line-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-line-code js-file-line">        <span class="nx">value</span> <span class="o">=</span> <span class="nb">decodeURIComponent</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-line-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-line-code js-file-line">        <span class="nx">name</span> <span class="o">=</span> <span class="nb">decodeURIComponent</span><span class="p">(</span><span class="nx">name</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-line-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">name</span> <span class="o">==</span> <span class="s1">&#39;autorun&#39;</span><span class="p">)</span>   <span class="p">{</span> <span class="nx">autorun</span> <span class="o">=</span> <span class="o">!</span><span class="sr">/^[0fn]/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span> <span class="p">}</span> <span class="k">else</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-line-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">name</span> <span class="o">==</span> <span class="s1">&#39;lang&#39;</span><span class="p">)</span>      <span class="p">{</span> <span class="nx">langs</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span>                <span class="p">}</span> <span class="k">else</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-line-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">name</span> <span class="o">==</span> <span class="s1">&#39;skin&#39;</span><span class="p">)</span>      <span class="p">{</span> <span class="nx">skins</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span>                <span class="p">}</span> <span class="k">else</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-line-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">name</span> <span class="o">==</span> <span class="s1">&#39;callback&#39;</span><span class="p">)</span>  <span class="p">{</span> <span class="nx">callbacks</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span>            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-line-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-line-code js-file-line">      <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-line-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L171" class="blob-line-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-line-code js-file-line">  <span class="c1">// Use https to avoid mixed content warnings in client pages and to</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-line-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-line-code js-file-line">  <span class="c1">// prevent a MITM from rewrite prettify mid-flight.</span></td>
      </tr>
      <tr>
        <td id="L173" class="blob-line-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-line-code js-file-line">  <span class="c1">// This only works if this script is loaded via https : something</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-line-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-line-code js-file-line">  <span class="c1">// over which we exercise no control.</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-line-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-line-code js-file-line">  <span class="kd">var</span> <span class="nx">LOADER_BASE_URL</span> <span class="o">=</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-line-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-line-code js-file-line">     <span class="s1">&#39;https://google-code-prettify.googlecode.com/svn/loader&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-line-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L178" class="blob-line-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-line-code js-file-line">  <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">n</span> <span class="o">=</span> <span class="nx">langs</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">n</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">lang</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-line-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">script</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;script&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-line-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L181" class="blob-line-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-line-code js-file-line">    <span class="c1">// Excerpted from jQuery.ajaxTransport(&quot;script&quot;) to fire events when</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-line-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-line-code js-file-line">    <span class="c1">// a script is finished loading.</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-line-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-line-code js-file-line">    <span class="c1">// Attach handlers for each script</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-line-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-line-code js-file-line">    <span class="nx">script</span><span class="p">.</span><span class="nx">onload</span> <span class="o">=</span> <span class="nx">script</span><span class="p">.</span><span class="nx">onerror</span> <span class="o">=</span> <span class="nx">script</span><span class="p">.</span><span class="nx">onreadystatechange</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-line-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">script</span> <span class="o">&amp;&amp;</span> <span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-line-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-line-code js-file-line">            <span class="o">!</span><span class="nx">script</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">||</span> <span class="sr">/loaded|complete/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">script</span><span class="p">.</span><span class="nx">readyState</span><span class="p">)))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-line-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-line-code js-file-line">        <span class="c1">// Handle memory leak in IE</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-line-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-line-code js-file-line">        <span class="nx">script</span><span class="p">.</span><span class="nx">onerror</span> <span class="o">=</span> <span class="nx">script</span><span class="p">.</span><span class="nx">onload</span> <span class="o">=</span> <span class="nx">script</span><span class="p">.</span><span class="nx">onreadystatechange</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-line-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L190" class="blob-line-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-line-code js-file-line">        <span class="o">--</span><span class="nx">pendingLanguages</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-line-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-line-code js-file-line">        <span class="nx">checkPendingLanguages</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-line-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L193" class="blob-line-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-line-code js-file-line">        <span class="c1">// Remove the script</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-line-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">script</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-line-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-line-code js-file-line">          <span class="nx">script</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">script</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-line-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-line-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L198" class="blob-line-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-line-code js-file-line">        <span class="nx">script</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-line-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-line-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-line-code js-file-line">    <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-line-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L202" class="blob-line-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-line-code js-file-line">    <span class="nx">script</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;text/javascript&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-line-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-line-code js-file-line">    <span class="nx">script</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="nx">LOADER_BASE_URL</span></td>
      </tr>
      <tr>
        <td id="L204" class="blob-line-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-line-code js-file-line">      <span class="o">+</span> <span class="s1">&#39;/lang-&#39;</span> <span class="o">+</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">langs</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span> <span class="o">+</span> <span class="s1">&#39;.js&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L205" class="blob-line-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L206" class="blob-line-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-line-code js-file-line">    <span class="c1">// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending</span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-line-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-line-code js-file-line">    <span class="nx">head</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">script</span><span class="p">,</span> <span class="nx">head</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-line-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-line-code js-file-line">  <span class="p">})(</span><span class="nx">langs</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-line-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L210" class="blob-line-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-line-code js-file-line">  <span class="kd">var</span> <span class="nx">pendingLanguages</span> <span class="o">=</span> <span class="nx">langs</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L211" class="blob-line-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-line-code js-file-line">  <span class="kd">function</span> <span class="nx">checkPendingLanguages</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-line-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-line-code js-file-line">    <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">pendingLanguages</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-line-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-line-code js-file-line">      <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">onLangsLoaded</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-line-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-line-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-line-code js-file-line">  <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L216" class="blob-line-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L217" class="blob-line-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-line-code js-file-line">  <span class="kd">var</span> <span class="nx">skinUrls</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-line-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-line-code js-file-line">  <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">n</span> <span class="o">=</span> <span class="nx">skins</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">n</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-line-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-line-code js-file-line">    <span class="nx">skinUrls</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">LOADER_BASE_URL</span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-line-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-line-code js-file-line">        <span class="o">+</span> <span class="s1">&#39;/skins/&#39;</span> <span class="o">+</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">skins</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span> <span class="o">+</span> <span class="s1">&#39;.css&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L221" class="blob-line-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-line-code js-file-line">  <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L222" class="blob-line-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-line-code js-file-line">  <span class="nx">skinUrls</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">LOADER_BASE_URL</span> <span class="o">+</span> <span class="s1">&#39;/prettify.css&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L223" class="blob-line-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-line-code js-file-line">  <span class="nx">loadStylesheetsFallingBack</span><span class="p">(</span><span class="nx">skinUrls</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L224" class="blob-line-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L225" class="blob-line-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-line-code js-file-line">  <span class="kd">var</span> <span class="nx">prettyPrint</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L226" class="blob-line-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-line-code js-file-line">    <span class="c1">// Copyright (C) 2006 Google Inc.</span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-line-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-line-code js-file-line">    <span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L228" class="blob-line-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-line-code js-file-line">    <span class="c1">// Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-line-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-line-code js-file-line">    <span class="c1">// you may not use this file except in compliance with the License.</span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-line-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-line-code js-file-line">    <span class="c1">// You may obtain a copy of the License at</span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-line-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-line-code js-file-line">    <span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L232" class="blob-line-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-line-code js-file-line">    <span class="c1">//      http://www.apache.org/licenses/LICENSE-2.0</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-line-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-line-code js-file-line">    <span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L234" class="blob-line-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-line-code js-file-line">    <span class="c1">// Unless required by applicable law or agreed to in writing, software</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-line-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-line-code js-file-line">    <span class="c1">// distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-line-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-line-code js-file-line">    <span class="c1">// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></td>
      </tr>
      <tr>
        <td id="L237" class="blob-line-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-line-code js-file-line">    <span class="c1">// See the License for the specific language governing permissions and</span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-line-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-line-code js-file-line">    <span class="c1">// limitations under the License.</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-line-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L240" class="blob-line-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L241" class="blob-line-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-line-code js-file-line">    <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L242" class="blob-line-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-line-code js-file-line"><span class="cm">     * @fileoverview</span></td>
      </tr>
      <tr>
        <td id="L243" class="blob-line-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-line-code js-file-line"><span class="cm">     * some functions for browser-side pretty printing of code contained in html.</span></td>
      </tr>
      <tr>
        <td id="L244" class="blob-line-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-line-code js-file-line"><span class="cm">     *</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-line-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-line-code js-file-line"><span class="cm">     * &lt;p&gt;</span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-line-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-line-code js-file-line"><span class="cm">     * For a fairly comprehensive set of languages see the</span></td>
      </tr>
      <tr>
        <td id="L247" class="blob-line-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-line-code js-file-line"><span class="cm">     * &lt;a href=&quot;http://google-code-prettify.googlecode.com/svn/trunk/README.html#langs&quot;&gt;README&lt;/a&gt;</span></td>
      </tr>
      <tr>
        <td id="L248" class="blob-line-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-line-code js-file-line"><span class="cm">     * file that came with this source.  At a minimum, the lexer should work on a</span></td>
      </tr>
      <tr>
        <td id="L249" class="blob-line-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-line-code js-file-line"><span class="cm">     * number of languages including C and friends, Java, Python, Bash, SQL, HTML,</span></td>
      </tr>
      <tr>
        <td id="L250" class="blob-line-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-line-code js-file-line"><span class="cm">     * XML, CSS, Javascript, and Makefiles.  It works passably on Ruby, PHP and Awk</span></td>
      </tr>
      <tr>
        <td id="L251" class="blob-line-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-line-code js-file-line"><span class="cm">     * and a subset of Perl, but, because of commenting conventions, doesn&#39;t work on</span></td>
      </tr>
      <tr>
        <td id="L252" class="blob-line-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-line-code js-file-line"><span class="cm">     * Smalltalk, Lisp-like, or CAML-like languages without an explicit lang class.</span></td>
      </tr>
      <tr>
        <td id="L253" class="blob-line-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-line-code js-file-line"><span class="cm">     * &lt;p&gt;</span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-line-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-line-code js-file-line"><span class="cm">     * Usage: &lt;ol&gt;</span></td>
      </tr>
      <tr>
        <td id="L255" class="blob-line-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-line-code js-file-line"><span class="cm">     * &lt;li&gt; include this source file in an html page via</span></td>
      </tr>
      <tr>
        <td id="L256" class="blob-line-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-line-code js-file-line"><span class="cm">     *   {@code &lt;script type=&quot;text/javascript&quot; src=&quot;/path/to/prettify.js&quot;&gt;&lt;/script&gt;}</span></td>
      </tr>
      <tr>
        <td id="L257" class="blob-line-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-line-code js-file-line"><span class="cm">     * &lt;li&gt; define style rules.  See the example page for examples.</span></td>
      </tr>
      <tr>
        <td id="L258" class="blob-line-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-line-code js-file-line"><span class="cm">     * &lt;li&gt; mark the {@code &lt;pre&gt;} and {@code &lt;code&gt;} tags in your source with</span></td>
      </tr>
      <tr>
        <td id="L259" class="blob-line-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-line-code js-file-line"><span class="cm">     *    {@code class=prettyprint.}</span></td>
      </tr>
      <tr>
        <td id="L260" class="blob-line-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-line-code js-file-line"><span class="cm">     *    You can also use the (html deprecated) {@code &lt;xmp&gt;} tag, but the pretty</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-line-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-line-code js-file-line"><span class="cm">     *    printer needs to do more substantial DOM manipulations to support that, so</span></td>
      </tr>
      <tr>
        <td id="L262" class="blob-line-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-line-code js-file-line"><span class="cm">     *    some css styles may not be preserved.</span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-line-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-line-code js-file-line"><span class="cm">     * &lt;/ol&gt;</span></td>
      </tr>
      <tr>
        <td id="L264" class="blob-line-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-line-code js-file-line"><span class="cm">     * That&#39;s it.  I wanted to keep the API as simple as possible, so there&#39;s no</span></td>
      </tr>
      <tr>
        <td id="L265" class="blob-line-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-line-code js-file-line"><span class="cm">     * need to specify which language the code is in, but if you wish, you can add</span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-line-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-line-code js-file-line"><span class="cm">     * another class to the {@code &lt;pre&gt;} or {@code &lt;code&gt;} element to specify the</span></td>
      </tr>
      <tr>
        <td id="L267" class="blob-line-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-line-code js-file-line"><span class="cm">     * language, as in {@code &lt;pre class=&quot;prettyprint lang-java&quot;&gt;}.  Any class that</span></td>
      </tr>
      <tr>
        <td id="L268" class="blob-line-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-line-code js-file-line"><span class="cm">     * starts with &quot;lang-&quot; followed by a file extension, specifies the file type.</span></td>
      </tr>
      <tr>
        <td id="L269" class="blob-line-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-line-code js-file-line"><span class="cm">     * See the &quot;lang-*.js&quot; files in this directory for code that implements</span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-line-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-line-code js-file-line"><span class="cm">     * per-language file handlers.</span></td>
      </tr>
      <tr>
        <td id="L271" class="blob-line-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-line-code js-file-line"><span class="cm">     * &lt;p&gt;</span></td>
      </tr>
      <tr>
        <td id="L272" class="blob-line-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-line-code js-file-line"><span class="cm">     * Change log:&lt;br&gt;</span></td>
      </tr>
      <tr>
        <td id="L273" class="blob-line-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-line-code js-file-line"><span class="cm">     * cbeust, 2006/08/22</span></td>
      </tr>
      <tr>
        <td id="L274" class="blob-line-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-line-code js-file-line"><span class="cm">     * &lt;blockquote&gt;</span></td>
      </tr>
      <tr>
        <td id="L275" class="blob-line-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-line-code js-file-line"><span class="cm">     *   Java annotations (start with &quot;@&quot;) are now captured as literals (&quot;lit&quot;)</span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-line-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-line-code js-file-line"><span class="cm">     * &lt;/blockquote&gt;</span></td>
      </tr>
      <tr>
        <td id="L277" class="blob-line-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-line-code js-file-line"><span class="cm">     * @requires console</span></td>
      </tr>
      <tr>
        <td id="L278" class="blob-line-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-line-code js-file-line"><span class="cm">     */</span></td>
      </tr>
      <tr>
        <td id="L279" class="blob-line-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L280" class="blob-line-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-line-code js-file-line">    <span class="c1">// JSLint declarations</span></td>
      </tr>
      <tr>
        <td id="L281" class="blob-line-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-line-code js-file-line">    <span class="cm">/*global console, document, navigator, setTimeout, window, define */</span></td>
      </tr>
      <tr>
        <td id="L282" class="blob-line-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L283" class="blob-line-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-line-code js-file-line">    <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L284" class="blob-line-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-line-code js-file-line"><span class="cm">     * Split {@code prettyPrint} into multiple timeouts so as not to interfere with</span></td>
      </tr>
      <tr>
        <td id="L285" class="blob-line-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-line-code js-file-line"><span class="cm">     * UI events.</span></td>
      </tr>
      <tr>
        <td id="L286" class="blob-line-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-line-code js-file-line"><span class="cm">     * If set to {@code false}, {@code prettyPrint()} is synchronous.</span></td>
      </tr>
      <tr>
        <td id="L287" class="blob-line-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-line-code js-file-line"><span class="cm">     */</span></td>
      </tr>
      <tr>
        <td id="L288" class="blob-line-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-line-code js-file-line">    <span class="nb">window</span><span class="p">[</span><span class="s1">&#39;PR_SHOULD_USE_CONTINUATION&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L289" class="blob-line-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L290" class="blob-line-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-line-code js-file-line">    <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L291" class="blob-line-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-line-code js-file-line"><span class="cm">     * Pretty print a chunk of code.</span></td>
      </tr>
      <tr>
        <td id="L292" class="blob-line-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-line-code js-file-line"><span class="cm">     * @param {string} sourceCodeHtml The HTML to pretty print.</span></td>
      </tr>
      <tr>
        <td id="L293" class="blob-line-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-line-code js-file-line"><span class="cm">     * @param {string} opt_langExtension The language name to use.</span></td>
      </tr>
      <tr>
        <td id="L294" class="blob-line-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-line-code js-file-line"><span class="cm">     *     Typically, a filename extension like &#39;cpp&#39; or &#39;java&#39;.</span></td>
      </tr>
      <tr>
        <td id="L295" class="blob-line-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-line-code js-file-line"><span class="cm">     * @param {number|boolean} opt_numberLines True to number lines,</span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-line-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-line-code js-file-line"><span class="cm">     *     or the 1-indexed number of the first line in sourceCodeHtml.</span></td>
      </tr>
      <tr>
        <td id="L297" class="blob-line-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-line-code js-file-line"><span class="cm">     * @return {string} code as html, but prettier</span></td>
      </tr>
      <tr>
        <td id="L298" class="blob-line-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-line-code js-file-line"><span class="cm">     */</span></td>
      </tr>
      <tr>
        <td id="L299" class="blob-line-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">prettyPrintOne</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L300" class="blob-line-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-line-code js-file-line">    <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L301" class="blob-line-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-line-code js-file-line"><span class="cm">     * Find all the {@code &lt;pre&gt;} and {@code &lt;code&gt;} tags in the DOM with</span></td>
      </tr>
      <tr>
        <td id="L302" class="blob-line-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-line-code js-file-line"><span class="cm">     * {@code class=prettyprint} and prettify them.</span></td>
      </tr>
      <tr>
        <td id="L303" class="blob-line-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-line-code js-file-line"><span class="cm">     *</span></td>
      </tr>
      <tr>
        <td id="L304" class="blob-line-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-line-code js-file-line"><span class="cm">     * @param {Function} opt_whenDone called when prettifying is done.</span></td>
      </tr>
      <tr>
        <td id="L305" class="blob-line-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-line-code js-file-line"><span class="cm">     * @param {HTMLElement|HTMLDocument} opt_root an element or document</span></td>
      </tr>
      <tr>
        <td id="L306" class="blob-line-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-line-code js-file-line"><span class="cm">     *   containing all the elements to pretty print.</span></td>
      </tr>
      <tr>
        <td id="L307" class="blob-line-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-line-code js-file-line"><span class="cm">     *   Defaults to {@code document.body}.</span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-line-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-line-code js-file-line"><span class="cm">     */</span></td>
      </tr>
      <tr>
        <td id="L309" class="blob-line-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">prettyPrint</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-line-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L311" class="blob-line-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L312" class="blob-line-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-line-code js-file-line">    <span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L313" class="blob-line-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">win</span> <span class="o">=</span> <span class="nb">window</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L314" class="blob-line-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-line-code js-file-line">      <span class="c1">// Keyword lists for various languages.</span></td>
      </tr>
      <tr>
        <td id="L315" class="blob-line-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-line-code js-file-line">      <span class="c1">// We use things that coerce to strings to make them compact when minified</span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-line-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-line-code js-file-line">      <span class="c1">// and to defeat aggressive optimizers that fold large string constants.</span></td>
      </tr>
      <tr>
        <td id="L317" class="blob-line-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">FLOW_CONTROL_KEYWORDS</span> <span class="o">=</span> <span class="p">[</span><span class="s2">&quot;break,continue,do,else,for,if,return,while&quot;</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L318" class="blob-line-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">C_KEYWORDS</span> <span class="o">=</span> <span class="p">[</span><span class="nx">FLOW_CONTROL_KEYWORDS</span><span class="p">,</span><span class="s2">&quot;auto,case,char,const,default,&quot;</span> <span class="o">+</span> </td>
      </tr>
      <tr>
        <td id="L319" class="blob-line-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-line-code js-file-line">          <span class="s2">&quot;double,enum,extern,float,goto,inline,int,long,register,short,signed,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-line-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-line-code js-file-line">          <span class="s2">&quot;sizeof,static,struct,switch,typedef,union,unsigned,void,volatile&quot;</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-line-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">COMMON_KEYWORDS</span> <span class="o">=</span> <span class="p">[</span><span class="nx">C_KEYWORDS</span><span class="p">,</span><span class="s2">&quot;catch,class,delete,false,import,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-line-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-line-code js-file-line">          <span class="s2">&quot;new,operator,private,protected,public,this,throw,true,try,typeof&quot;</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L323" class="blob-line-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">CPP_KEYWORDS</span> <span class="o">=</span> <span class="p">[</span><span class="nx">COMMON_KEYWORDS</span><span class="p">,</span><span class="s2">&quot;alignof,align_union,asm,axiom,bool,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L324" class="blob-line-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-line-code js-file-line">          <span class="s2">&quot;concept,concept_map,const_cast,constexpr,decltype,delegate,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-line-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-line-code js-file-line">          <span class="s2">&quot;dynamic_cast,explicit,export,friend,generic,late_check,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L326" class="blob-line-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-line-code js-file-line">          <span class="s2">&quot;mutable,namespace,nullptr,property,reinterpret_cast,static_assert,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L327" class="blob-line-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-line-code js-file-line">          <span class="s2">&quot;static_cast,template,typeid,typename,using,virtual,where&quot;</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L328" class="blob-line-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">JAVA_KEYWORDS</span> <span class="o">=</span> <span class="p">[</span><span class="nx">COMMON_KEYWORDS</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L329" class="blob-line-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-line-code js-file-line">          <span class="s2">&quot;abstract,assert,boolean,byte,extends,final,finally,implements,import,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L330" class="blob-line-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-line-code js-file-line">          <span class="s2">&quot;instanceof,interface,null,native,package,strictfp,super,synchronized,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L331" class="blob-line-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-line-code js-file-line">          <span class="s2">&quot;throws,transient&quot;</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L332" class="blob-line-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">CSHARP_KEYWORDS</span> <span class="o">=</span> <span class="p">[</span><span class="nx">JAVA_KEYWORDS</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L333" class="blob-line-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-line-code js-file-line">          <span class="s2">&quot;as,base,by,checked,decimal,delegate,descending,dynamic,event,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L334" class="blob-line-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-line-code js-file-line">          <span class="s2">&quot;fixed,foreach,from,group,implicit,in,internal,into,is,let,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L335" class="blob-line-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-line-code js-file-line">          <span class="s2">&quot;lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L336" class="blob-line-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-line-code js-file-line">          <span class="s2">&quot;sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L337" class="blob-line-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-line-code js-file-line">          <span class="s2">&quot;var,virtual,where&quot;</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L338" class="blob-line-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">COFFEE_KEYWORDS</span> <span class="o">=</span> <span class="s2">&quot;all,and,by,catch,class,else,extends,false,finally,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L339" class="blob-line-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-line-code js-file-line">          <span class="s2">&quot;for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L340" class="blob-line-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-line-code js-file-line">          <span class="s2">&quot;throw,true,try,unless,until,when,while,yes&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L341" class="blob-line-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">JSCRIPT_KEYWORDS</span> <span class="o">=</span> <span class="p">[</span><span class="nx">COMMON_KEYWORDS</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L342" class="blob-line-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-line-code js-file-line">          <span class="s2">&quot;debugger,eval,export,function,get,null,set,undefined,var,with,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L343" class="blob-line-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-line-code js-file-line">          <span class="s2">&quot;Infinity,NaN&quot;</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L344" class="blob-line-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">PERL_KEYWORDS</span> <span class="o">=</span> <span class="s2">&quot;caller,delete,die,do,dump,elsif,eval,exit,foreach,for,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L345" class="blob-line-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-line-code js-file-line">          <span class="s2">&quot;goto,if,import,last,local,my,next,no,our,print,package,redo,require,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L346" class="blob-line-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-line-code js-file-line">          <span class="s2">&quot;sub,undef,unless,until,use,wantarray,while,BEGIN,END&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L347" class="blob-line-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">PYTHON_KEYWORDS</span> <span class="o">=</span> <span class="p">[</span><span class="nx">FLOW_CONTROL_KEYWORDS</span><span class="p">,</span> <span class="s2">&quot;and,as,assert,class,def,del,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L348" class="blob-line-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-line-code js-file-line">          <span class="s2">&quot;elif,except,exec,finally,from,global,import,in,is,lambda,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L349" class="blob-line-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-line-code js-file-line">          <span class="s2">&quot;nonlocal,not,or,pass,print,raise,try,with,yield,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L350" class="blob-line-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-line-code js-file-line">          <span class="s2">&quot;False,True,None&quot;</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L351" class="blob-line-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">RUBY_KEYWORDS</span> <span class="o">=</span> <span class="p">[</span><span class="nx">FLOW_CONTROL_KEYWORDS</span><span class="p">,</span> <span class="s2">&quot;alias,and,begin,case,class,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L352" class="blob-line-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-line-code js-file-line">          <span class="s2">&quot;def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L353" class="blob-line-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-line-code js-file-line">          <span class="s2">&quot;rescue,retry,self,super,then,true,undef,unless,until,when,yield,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L354" class="blob-line-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-line-code js-file-line">          <span class="s2">&quot;BEGIN,END&quot;</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L355" class="blob-line-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-line-code js-file-line">       <span class="kd">var</span> <span class="nx">RUST_KEYWORDS</span> <span class="o">=</span> <span class="p">[</span><span class="nx">FLOW_CONTROL_KEYWORDS</span><span class="p">,</span> <span class="s2">&quot;as,assert,const,copy,drop,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L356" class="blob-line-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-line-code js-file-line">          <span class="s2">&quot;enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L357" class="blob-line-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-line-code js-file-line">          <span class="s2">&quot;pub,pure,ref,self,static,struct,true,trait,type,unsafe,use&quot;</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L358" class="blob-line-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">SH_KEYWORDS</span> <span class="o">=</span> <span class="p">[</span><span class="nx">FLOW_CONTROL_KEYWORDS</span><span class="p">,</span> <span class="s2">&quot;case,done,elif,esac,eval,fi,&quot;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L359" class="blob-line-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-line-code js-file-line">          <span class="s2">&quot;function,in,local,set,then,until&quot;</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L360" class="blob-line-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">ALL_KEYWORDS</span> <span class="o">=</span> <span class="p">[</span></td>
      </tr>
      <tr>
        <td id="L361" class="blob-line-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-line-code js-file-line">          <span class="nx">CPP_KEYWORDS</span><span class="p">,</span> <span class="nx">CSHARP_KEYWORDS</span><span class="p">,</span> <span class="nx">JSCRIPT_KEYWORDS</span><span class="p">,</span> <span class="nx">PERL_KEYWORDS</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L362" class="blob-line-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-line-code js-file-line">          <span class="nx">PYTHON_KEYWORDS</span><span class="p">,</span> <span class="nx">RUBY_KEYWORDS</span><span class="p">,</span> <span class="nx">SH_KEYWORDS</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L363" class="blob-line-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">C_TYPES</span> <span class="o">=</span> <span class="sr">/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L364" class="blob-line-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L365" class="blob-line-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-line-code js-file-line">      <span class="c1">// token style names.  correspond to css classes</span></td>
      </tr>
      <tr>
        <td id="L366" class="blob-line-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-line-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L367" class="blob-line-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-line-code js-file-line"><span class="cm">       * token style for a string literal</span></td>
      </tr>
      <tr>
        <td id="L368" class="blob-line-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-line-code js-file-line"><span class="cm">       * @const</span></td>
      </tr>
      <tr>
        <td id="L369" class="blob-line-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-line-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L370" class="blob-line-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">PR_STRING</span> <span class="o">=</span> <span class="s1">&#39;str&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L371" class="blob-line-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-line-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L372" class="blob-line-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-line-code js-file-line"><span class="cm">       * token style for a keyword</span></td>
      </tr>
      <tr>
        <td id="L373" class="blob-line-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-line-code js-file-line"><span class="cm">       * @const</span></td>
      </tr>
      <tr>
        <td id="L374" class="blob-line-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-line-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L375" class="blob-line-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">PR_KEYWORD</span> <span class="o">=</span> <span class="s1">&#39;kwd&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L376" class="blob-line-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-line-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L377" class="blob-line-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-line-code js-file-line"><span class="cm">       * token style for a comment</span></td>
      </tr>
      <tr>
        <td id="L378" class="blob-line-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-line-code js-file-line"><span class="cm">       * @const</span></td>
      </tr>
      <tr>
        <td id="L379" class="blob-line-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-line-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L380" class="blob-line-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">PR_COMMENT</span> <span class="o">=</span> <span class="s1">&#39;com&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L381" class="blob-line-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-line-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L382" class="blob-line-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-line-code js-file-line"><span class="cm">       * token style for a type</span></td>
      </tr>
      <tr>
        <td id="L383" class="blob-line-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-line-code js-file-line"><span class="cm">       * @const</span></td>
      </tr>
      <tr>
        <td id="L384" class="blob-line-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-line-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L385" class="blob-line-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">PR_TYPE</span> <span class="o">=</span> <span class="s1">&#39;typ&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L386" class="blob-line-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-line-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L387" class="blob-line-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-line-code js-file-line"><span class="cm">       * token style for a literal value.  e.g. 1, null, true.</span></td>
      </tr>
      <tr>
        <td id="L388" class="blob-line-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-line-code js-file-line"><span class="cm">       * @const</span></td>
      </tr>
      <tr>
        <td id="L389" class="blob-line-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-line-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L390" class="blob-line-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">PR_LITERAL</span> <span class="o">=</span> <span class="s1">&#39;lit&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L391" class="blob-line-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-line-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L392" class="blob-line-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-line-code js-file-line"><span class="cm">       * token style for a punctuation string.</span></td>
      </tr>
      <tr>
        <td id="L393" class="blob-line-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-line-code js-file-line"><span class="cm">       * @const</span></td>
      </tr>
      <tr>
        <td id="L394" class="blob-line-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-line-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L395" class="blob-line-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">PR_PUNCTUATION</span> <span class="o">=</span> <span class="s1">&#39;pun&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L396" class="blob-line-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-line-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L397" class="blob-line-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-line-code js-file-line"><span class="cm">       * token style for plain text.</span></td>
      </tr>
      <tr>
        <td id="L398" class="blob-line-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-line-code js-file-line"><span class="cm">       * @const</span></td>
      </tr>
      <tr>
        <td id="L399" class="blob-line-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-line-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L400" class="blob-line-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">PR_PLAIN</span> <span class="o">=</span> <span class="s1">&#39;pln&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L401" class="blob-line-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L402" class="blob-line-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-line-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L403" class="blob-line-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-line-code js-file-line"><span class="cm">       * token style for an sgml tag.</span></td>
      </tr>
      <tr>
        <td id="L404" class="blob-line-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-line-code js-file-line"><span class="cm">       * @const</span></td>
      </tr>
      <tr>
        <td id="L405" class="blob-line-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-line-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L406" class="blob-line-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">PR_TAG</span> <span class="o">=</span> <span class="s1">&#39;tag&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L407" class="blob-line-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-line-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L408" class="blob-line-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-line-code js-file-line"><span class="cm">       * token style for a markup declaration such as a DOCTYPE.</span></td>
      </tr>
      <tr>
        <td id="L409" class="blob-line-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-line-code js-file-line"><span class="cm">       * @const</span></td>
      </tr>
      <tr>
        <td id="L410" class="blob-line-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-line-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L411" class="blob-line-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">PR_DECLARATION</span> <span class="o">=</span> <span class="s1">&#39;dec&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L412" class="blob-line-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-line-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L413" class="blob-line-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-line-code js-file-line"><span class="cm">       * token style for embedded source.</span></td>
      </tr>
      <tr>
        <td id="L414" class="blob-line-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-line-code js-file-line"><span class="cm">       * @const</span></td>
      </tr>
      <tr>
        <td id="L415" class="blob-line-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-line-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L416" class="blob-line-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">PR_SOURCE</span> <span class="o">=</span> <span class="s1">&#39;src&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L417" class="blob-line-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-line-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L418" class="blob-line-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-line-code js-file-line"><span class="cm">       * token style for an sgml attribute name.</span></td>
      </tr>
      <tr>
        <td id="L419" class="blob-line-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-line-code js-file-line"><span class="cm">       * @const</span></td>
      </tr>
      <tr>
        <td id="L420" class="blob-line-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-line-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L421" class="blob-line-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">PR_ATTRIB_NAME</span> <span class="o">=</span> <span class="s1">&#39;atn&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L422" class="blob-line-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-line-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L423" class="blob-line-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-line-code js-file-line"><span class="cm">       * token style for an sgml attribute value.</span></td>
      </tr>
      <tr>
        <td id="L424" class="blob-line-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-line-code js-file-line"><span class="cm">       * @const</span></td>
      </tr>
      <tr>
        <td id="L425" class="blob-line-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-line-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L426" class="blob-line-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">PR_ATTRIB_VALUE</span> <span class="o">=</span> <span class="s1">&#39;atv&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L427" class="blob-line-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L428" class="blob-line-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-line-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L429" class="blob-line-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-line-code js-file-line"><span class="cm">       * A class that indicates a section of markup that is not code, e.g. to allow</span></td>
      </tr>
      <tr>
        <td id="L430" class="blob-line-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-line-code js-file-line"><span class="cm">       * embedding of line numbers within code listings.</span></td>
      </tr>
      <tr>
        <td id="L431" class="blob-line-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-line-code js-file-line"><span class="cm">       * @const</span></td>
      </tr>
      <tr>
        <td id="L432" class="blob-line-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-line-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L433" class="blob-line-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">PR_NOCODE</span> <span class="o">=</span> <span class="s1">&#39;nocode&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L434" class="blob-line-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L435" class="blob-line-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L436" class="blob-line-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L437" class="blob-line-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-line-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L438" class="blob-line-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-line-code js-file-line"><span class="cm">       * A set of tokens that can precede a regular expression literal in</span></td>
      </tr>
      <tr>
        <td id="L439" class="blob-line-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-line-code js-file-line"><span class="cm">       * javascript</span></td>
      </tr>
      <tr>
        <td id="L440" class="blob-line-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-line-code js-file-line"><span class="cm">       * http://web.archive.org/web/20070717142515/http://www.mozilla.org/js/language/js20/rationale/syntax.html</span></td>
      </tr>
      <tr>
        <td id="L441" class="blob-line-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-line-code js-file-line"><span class="cm">       * has the full list, but I&#39;ve removed ones that might be problematic when</span></td>
      </tr>
      <tr>
        <td id="L442" class="blob-line-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-line-code js-file-line"><span class="cm">       * seen in languages that don&#39;t support regular expression literals.</span></td>
      </tr>
      <tr>
        <td id="L443" class="blob-line-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-line-code js-file-line"><span class="cm">       *</span></td>
      </tr>
      <tr>
        <td id="L444" class="blob-line-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-line-code js-file-line"><span class="cm">       * &lt;p&gt;Specifically, I&#39;ve removed any keywords that can&#39;t precede a regexp</span></td>
      </tr>
      <tr>
        <td id="L445" class="blob-line-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-line-code js-file-line"><span class="cm">       * literal in a syntactically legal javascript program, and I&#39;ve removed the</span></td>
      </tr>
      <tr>
        <td id="L446" class="blob-line-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-line-code js-file-line"><span class="cm">       * &quot;in&quot; keyword since it&#39;s not a keyword in many languages, and might be used</span></td>
      </tr>
      <tr>
        <td id="L447" class="blob-line-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-line-code js-file-line"><span class="cm">       * as a count of inches.</span></td>
      </tr>
      <tr>
        <td id="L448" class="blob-line-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-line-code js-file-line"><span class="cm">       *</span></td>
      </tr>
      <tr>
        <td id="L449" class="blob-line-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-line-code js-file-line"><span class="cm">       * &lt;p&gt;The link above does not accurately describe EcmaScript rules since</span></td>
      </tr>
      <tr>
        <td id="L450" class="blob-line-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-line-code js-file-line"><span class="cm">       * it fails to distinguish between (a=++/b/i) and (a++/b/i) but it works</span></td>
      </tr>
      <tr>
        <td id="L451" class="blob-line-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-line-code js-file-line"><span class="cm">       * very well in practice.</span></td>
      </tr>
      <tr>
        <td id="L452" class="blob-line-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-line-code js-file-line"><span class="cm">       *</span></td>
      </tr>
      <tr>
        <td id="L453" class="blob-line-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-line-code js-file-line"><span class="cm">       * @private</span></td>
      </tr>
      <tr>
        <td id="L454" class="blob-line-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-line-code js-file-line"><span class="cm">       * @const</span></td>
      </tr>
      <tr>
        <td id="L455" class="blob-line-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-line-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L456" class="blob-line-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">REGEXP_PRECEDER_PATTERN</span> <span class="o">=</span> <span class="s1">&#39;(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&amp;&amp;?=?|\\(|\\*=?|[+\\-]=|-&gt;|\\/=?|::?|&lt;&lt;?=?|&gt;&gt;?&gt;?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L457" class="blob-line-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L458" class="blob-line-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-line-code js-file-line">      <span class="c1">// CAVEAT: this does not properly handle the case where a regular</span></td>
      </tr>
      <tr>
        <td id="L459" class="blob-line-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-line-code js-file-line">      <span class="c1">// expression immediately follows another since a regular expression may</span></td>
      </tr>
      <tr>
        <td id="L460" class="blob-line-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-line-code js-file-line">      <span class="c1">// have flags for case-sensitivity and the like.  Having regexp tokens</span></td>
      </tr>
      <tr>
        <td id="L461" class="blob-line-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-line-code js-file-line">      <span class="c1">// adjacent is not valid in any language I&#39;m aware of, so I&#39;m punting.</span></td>
      </tr>
      <tr>
        <td id="L462" class="blob-line-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-line-code js-file-line">      <span class="c1">// TODO: maybe style special characters inside a regexp as punctuation.</span></td>
      </tr>
      <tr>
        <td id="L463" class="blob-line-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L464" class="blob-line-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-line-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L465" class="blob-line-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-line-code js-file-line"><span class="cm">       * Given a group of {@link RegExp}s, returns a {@code RegExp} that globally</span></td>
      </tr>
      <tr>
        <td id="L466" class="blob-line-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-line-code js-file-line"><span class="cm">       * matches the union of the sets of strings matched by the input RegExp.</span></td>
      </tr>
      <tr>
        <td id="L467" class="blob-line-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-line-code js-file-line"><span class="cm">       * Since it matches globally, if the input strings have a start-of-input</span></td>
      </tr>
      <tr>
        <td id="L468" class="blob-line-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-line-code js-file-line"><span class="cm">       * anchor (/^.../), it is ignored for the purposes of unioning.</span></td>
      </tr>
      <tr>
        <td id="L469" class="blob-line-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-line-code js-file-line"><span class="cm">       * @param {Array.&lt;RegExp&gt;} regexs non multiline, non-global regexs.</span></td>
      </tr>
      <tr>
        <td id="L470" class="blob-line-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-line-code js-file-line"><span class="cm">       * @return {RegExp} a global regex.</span></td>
      </tr>
      <tr>
        <td id="L471" class="blob-line-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-line-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L472" class="blob-line-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-line-code js-file-line">      <span class="kd">function</span> <span class="nx">combinePrefixPatterns</span><span class="p">(</span><span class="nx">regexs</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L473" class="blob-line-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">capturedGroupIndex</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L474" class="blob-line-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L475" class="blob-line-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">needToFoldCase</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L476" class="blob-line-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">ignoreCase</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L477" class="blob-line-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-line-code js-file-line">        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">n</span> <span class="o">=</span> <span class="nx">regexs</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">n</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L478" class="blob-line-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">regex</span> <span class="o">=</span> <span class="nx">regexs</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L479" class="blob-line-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">regex</span><span class="p">.</span><span class="nx">ignoreCase</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L480" class="blob-line-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-line-code js-file-line">            <span class="nx">ignoreCase</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L481" class="blob-line-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-line-code js-file-line">          <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="sr">/[a-z]/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">regex</span><span class="p">.</span><span class="nx">source</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L482" class="blob-line-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-line-code js-file-line">                         <span class="sr">/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L483" class="blob-line-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-line-code js-file-line">            <span class="nx">needToFoldCase</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L484" class="blob-line-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-line-code js-file-line">            <span class="nx">ignoreCase</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L485" class="blob-line-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-line-code js-file-line">            <span class="k">break</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L486" class="blob-line-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L487" class="blob-line-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L488" class="blob-line-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L489" class="blob-line-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">escapeCharToCodeUnit</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L490" class="blob-line-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-line-code js-file-line">          <span class="s1">&#39;b&#39;</span><span class="o">:</span> <span class="mi">8</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L491" class="blob-line-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-line-code js-file-line">          <span class="s1">&#39;t&#39;</span><span class="o">:</span> <span class="mi">9</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L492" class="blob-line-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-line-code js-file-line">          <span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="mh">0xa</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L493" class="blob-line-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-line-code js-file-line">          <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="mh">0xb</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L494" class="blob-line-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-line-code js-file-line">          <span class="s1">&#39;f&#39;</span><span class="o">:</span> <span class="mh">0xc</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L495" class="blob-line-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-line-code js-file-line">          <span class="s1">&#39;r&#39;</span><span class="o">:</span> <span class="mh">0xd</span></td>
      </tr>
      <tr>
        <td id="L496" class="blob-line-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-line-code js-file-line">        <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L497" class="blob-line-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L498" class="blob-line-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-line-code js-file-line">        <span class="kd">function</span> <span class="nx">decodeEscape</span><span class="p">(</span><span class="nx">charsetPart</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L499" class="blob-line-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">cc0</span> <span class="o">=</span> <span class="nx">charsetPart</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L500" class="blob-line-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">cc0</span> <span class="o">!==</span> <span class="mi">92</span> <span class="cm">/* \\ */</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L501" class="blob-line-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-line-code js-file-line">            <span class="k">return</span> <span class="nx">cc0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L502" class="blob-line-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L503" class="blob-line-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">c1</span> <span class="o">=</span> <span class="nx">charsetPart</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L504" class="blob-line-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-line-code js-file-line">          <span class="nx">cc0</span> <span class="o">=</span> <span class="nx">escapeCharToCodeUnit</span><span class="p">[</span><span class="nx">c1</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L505" class="blob-line-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">cc0</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L506" class="blob-line-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-line-code js-file-line">            <span class="k">return</span> <span class="nx">cc0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L507" class="blob-line-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-line-code js-file-line">          <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="s1">&#39;0&#39;</span> <span class="o">&lt;=</span> <span class="nx">c1</span> <span class="o">&amp;&amp;</span> <span class="nx">c1</span> <span class="o">&lt;=</span> <span class="s1">&#39;7&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L508" class="blob-line-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-line-code js-file-line">            <span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">charsetPart</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">1</span><span class="p">),</span> <span class="mi">8</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L509" class="blob-line-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-line-code js-file-line">          <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">c1</span> <span class="o">===</span> <span class="s1">&#39;u&#39;</span> <span class="o">||</span> <span class="nx">c1</span> <span class="o">===</span> <span class="s1">&#39;x&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L510" class="blob-line-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-line-code js-file-line">            <span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">charsetPart</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">2</span><span class="p">),</span> <span class="mi">16</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L511" class="blob-line-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-line-code js-file-line">          <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L512" class="blob-line-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-line-code js-file-line">            <span class="k">return</span> <span class="nx">charsetPart</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L513" class="blob-line-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L514" class="blob-line-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L515" class="blob-line-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L516" class="blob-line-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-line-code js-file-line">        <span class="kd">function</span> <span class="nx">encodeEscape</span><span class="p">(</span><span class="nx">charCode</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L517" class="blob-line-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">charCode</span> <span class="o">&lt;</span> <span class="mh">0x20</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L518" class="blob-line-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-line-code js-file-line">            <span class="k">return</span> <span class="p">(</span><span class="nx">charCode</span> <span class="o">&lt;</span> <span class="mh">0x10</span> <span class="o">?</span> <span class="s1">&#39;\\x0&#39;</span> <span class="o">:</span> <span class="s1">&#39;\\x&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="nx">charCode</span><span class="p">.</span><span class="nx">toString</span><span class="p">(</span><span class="mi">16</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L519" class="blob-line-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L520" class="blob-line-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">ch</span> <span class="o">=</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="nx">charCode</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L521" class="blob-line-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-line-code js-file-line">          <span class="k">return</span> <span class="p">(</span><span class="nx">ch</span> <span class="o">===</span> <span class="s1">&#39;\\&#39;</span> <span class="o">||</span> <span class="nx">ch</span> <span class="o">===</span> <span class="s1">&#39;-&#39;</span> <span class="o">||</span> <span class="nx">ch</span> <span class="o">===</span> <span class="s1">&#39;]&#39;</span> <span class="o">||</span> <span class="nx">ch</span> <span class="o">===</span> <span class="s1">&#39;^&#39;</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L522" class="blob-line-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-line-code js-file-line">              <span class="o">?</span> <span class="s2">&quot;\\&quot;</span> <span class="o">+</span> <span class="nx">ch</span> <span class="o">:</span> <span class="nx">ch</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L523" class="blob-line-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L524" class="blob-line-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L525" class="blob-line-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-line-code js-file-line">        <span class="kd">function</span> <span class="nx">caseFoldCharset</span><span class="p">(</span><span class="nx">charSet</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L526" class="blob-line-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">charsetParts</span> <span class="o">=</span> <span class="nx">charSet</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="nx">charSet</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">).</span><span class="nx">match</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L527" class="blob-line-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-line-code js-file-line">              <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L528" class="blob-line-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-line-code js-file-line">                  <span class="s1">&#39;\\\\u[0-9A-Fa-f]{4}&#39;</span></td>
      </tr>
      <tr>
        <td id="L529" class="blob-line-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-line-code js-file-line">                  <span class="o">+</span> <span class="s1">&#39;|\\\\x[0-9A-Fa-f]{2}&#39;</span></td>
      </tr>
      <tr>
        <td id="L530" class="blob-line-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-line-code js-file-line">                  <span class="o">+</span> <span class="s1">&#39;|\\\\[0-3][0-7]{0,2}&#39;</span></td>
      </tr>
      <tr>
        <td id="L531" class="blob-line-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-line-code js-file-line">                  <span class="o">+</span> <span class="s1">&#39;|\\\\[0-7]{1,2}&#39;</span></td>
      </tr>
      <tr>
        <td id="L532" class="blob-line-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-line-code js-file-line">                  <span class="o">+</span> <span class="s1">&#39;|\\\\[\\s\\S]&#39;</span></td>
      </tr>
      <tr>
        <td id="L533" class="blob-line-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-line-code js-file-line">                  <span class="o">+</span> <span class="s1">&#39;|-&#39;</span></td>
      </tr>
      <tr>
        <td id="L534" class="blob-line-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-line-code js-file-line">                  <span class="o">+</span> <span class="s1">&#39;|[^-\\\\]&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L535" class="blob-line-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-line-code js-file-line">                  <span class="s1">&#39;g&#39;</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L536" class="blob-line-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">ranges</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L537" class="blob-line-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">inverse</span> <span class="o">=</span> <span class="nx">charsetParts</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="s1">&#39;^&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L538" class="blob-line-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L539" class="blob-line-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">out</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;[&#39;</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L540" class="blob-line-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">inverse</span><span class="p">)</span> <span class="p">{</span> <span class="nx">out</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="s1">&#39;^&#39;</span><span class="p">);</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L541" class="blob-line-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L542" class="blob-line-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-line-code js-file-line">          <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">inverse</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">n</span> <span class="o">=</span> <span class="nx">charsetParts</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">n</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L543" class="blob-line-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">p</span> <span class="o">=</span> <span class="nx">charsetParts</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L544" class="blob-line-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="sr">/\\[bdsw]/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">p</span><span class="p">))</span> <span class="p">{</span>  <span class="c1">// Don&#39;t muck with named groups.</span></td>
      </tr>
      <tr>
        <td id="L545" class="blob-line-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-line-code js-file-line">              <span class="nx">out</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">p</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L546" class="blob-line-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-line-code js-file-line">            <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L547" class="blob-line-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-line-code js-file-line">              <span class="kd">var</span> <span class="nx">start</span> <span class="o">=</span> <span class="nx">decodeEscape</span><span class="p">(</span><span class="nx">p</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L548" class="blob-line-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-line-code js-file-line">              <span class="kd">var</span> <span class="nx">end</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L549" class="blob-line-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">2</span> <span class="o">&lt;</span> <span class="nx">n</span> <span class="o">&amp;&amp;</span> <span class="s1">&#39;-&#39;</span> <span class="o">===</span> <span class="nx">charsetParts</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">])</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L550" class="blob-line-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-line-code js-file-line">                <span class="nx">end</span> <span class="o">=</span> <span class="nx">decodeEscape</span><span class="p">(</span><span class="nx">charsetParts</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">2</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L551" class="blob-line-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-line-code js-file-line">                <span class="nx">i</span> <span class="o">+=</span> <span class="mi">2</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L552" class="blob-line-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-line-code js-file-line">              <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L553" class="blob-line-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-line-code js-file-line">                <span class="nx">end</span> <span class="o">=</span> <span class="nx">start</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L554" class="blob-line-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L555" class="blob-line-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-line-code js-file-line">              <span class="nx">ranges</span><span class="p">.</span><span class="nx">push</span><span class="p">([</span><span class="nx">start</span><span class="p">,</span> <span class="nx">end</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L556" class="blob-line-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-line-code js-file-line">              <span class="c1">// If the range might intersect letters, then expand it.</span></td>
      </tr>
      <tr>
        <td id="L557" class="blob-line-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-line-code js-file-line">              <span class="c1">// This case handling is too simplistic.</span></td>
      </tr>
      <tr>
        <td id="L558" class="blob-line-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-line-code js-file-line">              <span class="c1">// It does not deal with non-latin case folding.</span></td>
      </tr>
      <tr>
        <td id="L559" class="blob-line-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-line-code js-file-line">              <span class="c1">// It works for latin source code identifiers though.</span></td>
      </tr>
      <tr>
        <td id="L560" class="blob-line-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">end</span> <span class="o">&lt;</span> <span class="mi">65</span> <span class="o">||</span> <span class="nx">start</span> <span class="o">&gt;</span> <span class="mi">122</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L561" class="blob-line-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-line-code js-file-line">                <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">end</span> <span class="o">&lt;</span> <span class="mi">65</span> <span class="o">||</span> <span class="nx">start</span> <span class="o">&gt;</span> <span class="mi">90</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L562" class="blob-line-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-line-code js-file-line">                  <span class="nx">ranges</span><span class="p">.</span><span class="nx">push</span><span class="p">([</span><span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="mi">65</span><span class="p">,</span> <span class="nx">start</span><span class="p">)</span> <span class="o">|</span> <span class="mi">32</span><span class="p">,</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">end</span><span class="p">,</span> <span class="mi">90</span><span class="p">)</span> <span class="o">|</span> <span class="mi">32</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L563" class="blob-line-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-line-code js-file-line">                <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L564" class="blob-line-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-line-code js-file-line">                <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">end</span> <span class="o">&lt;</span> <span class="mi">97</span> <span class="o">||</span> <span class="nx">start</span> <span class="o">&gt;</span> <span class="mi">122</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L565" class="blob-line-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-line-code js-file-line">                  <span class="nx">ranges</span><span class="p">.</span><span class="nx">push</span><span class="p">([</span><span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="mi">97</span><span class="p">,</span> <span class="nx">start</span><span class="p">)</span> <span class="o">&amp;</span> <span class="o">~</span><span class="mi">32</span><span class="p">,</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">end</span><span class="p">,</span> <span class="mi">122</span><span class="p">)</span> <span class="o">&amp;</span> <span class="o">~</span><span class="mi">32</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L566" class="blob-line-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-line-code js-file-line">                <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L567" class="blob-line-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L568" class="blob-line-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L569" class="blob-line-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L570" class="blob-line-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L571" class="blob-line-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-line-code js-file-line">          <span class="c1">// [[1, 10], [3, 4], [8, 12], [14, 14], [16, 16], [17, 17]]</span></td>
      </tr>
      <tr>
        <td id="L572" class="blob-line-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-line-code js-file-line">          <span class="c1">// -&gt; [[1, 12], [14, 14], [16, 17]]</span></td>
      </tr>
      <tr>
        <td id="L573" class="blob-line-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-line-code js-file-line">          <span class="nx">ranges</span><span class="p">.</span><span class="nx">sort</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">-</span> <span class="nx">b</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="o">||</span> <span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span>  <span class="o">-</span> <span class="nx">a</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span> <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L574" class="blob-line-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">consolidatedRanges</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L575" class="blob-line-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">lastRange</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L576" class="blob-line-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-line-code js-file-line">          <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">ranges</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L577" class="blob-line-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">range</span> <span class="o">=</span> <span class="nx">ranges</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L578" class="blob-line-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">range</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">&lt;=</span> <span class="nx">lastRange</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L579" class="blob-line-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-line-code js-file-line">              <span class="nx">lastRange</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">lastRange</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span> <span class="nx">range</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L580" class="blob-line-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-line-code js-file-line">            <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L581" class="blob-line-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-line-code js-file-line">              <span class="nx">consolidatedRanges</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">lastRange</span> <span class="o">=</span> <span class="nx">range</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L582" class="blob-line-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L583" class="blob-line-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L584" class="blob-line-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L585" class="blob-line-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-line-code js-file-line">          <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">consolidatedRanges</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L586" class="blob-line-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">range</span> <span class="o">=</span> <span class="nx">consolidatedRanges</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L587" class="blob-line-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-line-code js-file-line">            <span class="nx">out</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">encodeEscape</span><span class="p">(</span><span class="nx">range</span><span class="p">[</span><span class="mi">0</span><span class="p">]));</span></td>
      </tr>
      <tr>
        <td id="L588" class="blob-line-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">range</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">&gt;</span> <span class="nx">range</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L589" class="blob-line-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="nx">range</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">+</span> <span class="mi">1</span> <span class="o">&gt;</span> <span class="nx">range</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="p">{</span> <span class="nx">out</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="s1">&#39;-&#39;</span><span class="p">);</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L590" class="blob-line-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-line-code js-file-line">              <span class="nx">out</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">encodeEscape</span><span class="p">(</span><span class="nx">range</span><span class="p">[</span><span class="mi">1</span><span class="p">]));</span></td>
      </tr>
      <tr>
        <td id="L591" class="blob-line-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L592" class="blob-line-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L593" class="blob-line-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-line-code js-file-line">          <span class="nx">out</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="s1">&#39;]&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L594" class="blob-line-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-line-code js-file-line">          <span class="k">return</span> <span class="nx">out</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L595" class="blob-line-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L596" class="blob-line-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L597" class="blob-line-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-line-code js-file-line">        <span class="kd">function</span> <span class="nx">allowAnywhereFoldCaseAndRenumberGroups</span><span class="p">(</span><span class="nx">regex</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L598" class="blob-line-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-line-code js-file-line">          <span class="c1">// Split into character sets, escape sequences, punctuation strings</span></td>
      </tr>
      <tr>
        <td id="L599" class="blob-line-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-line-code js-file-line">          <span class="c1">// like (&#39;(&#39;, &#39;(?:&#39;, &#39;)&#39;, &#39;^&#39;), and runs of characters that do not</span></td>
      </tr>
      <tr>
        <td id="L600" class="blob-line-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-line-code js-file-line">          <span class="c1">// include any of the above.</span></td>
      </tr>
      <tr>
        <td id="L601" class="blob-line-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">parts</span> <span class="o">=</span> <span class="nx">regex</span><span class="p">.</span><span class="nx">source</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L602" class="blob-line-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-line-code js-file-line">              <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L603" class="blob-line-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-line-code js-file-line">                  <span class="s1">&#39;(?:&#39;</span></td>
      </tr>
      <tr>
        <td id="L604" class="blob-line-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-line-code js-file-line">                  <span class="o">+</span> <span class="s1">&#39;\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]&#39;</span>  <span class="c1">// a character set</span></td>
      </tr>
      <tr>
        <td id="L605" class="blob-line-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-line-code js-file-line">                  <span class="o">+</span> <span class="s1">&#39;|\\\\u[A-Fa-f0-9]{4}&#39;</span>  <span class="c1">// a unicode escape</span></td>
      </tr>
      <tr>
        <td id="L606" class="blob-line-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-line-code js-file-line">                  <span class="o">+</span> <span class="s1">&#39;|\\\\x[A-Fa-f0-9]{2}&#39;</span>  <span class="c1">// a hex escape</span></td>
      </tr>
      <tr>
        <td id="L607" class="blob-line-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-line-code js-file-line">                  <span class="o">+</span> <span class="s1">&#39;|\\\\[0-9]+&#39;</span>  <span class="c1">// a back-reference or octal escape</span></td>
      </tr>
      <tr>
        <td id="L608" class="blob-line-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-line-code js-file-line">                  <span class="o">+</span> <span class="s1">&#39;|\\\\[^ux0-9]&#39;</span>  <span class="c1">// other escape sequence</span></td>
      </tr>
      <tr>
        <td id="L609" class="blob-line-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-line-code js-file-line">                  <span class="o">+</span> <span class="s1">&#39;|\\(\\?[:!=]&#39;</span>  <span class="c1">// start of a non-capturing group</span></td>
      </tr>
      <tr>
        <td id="L610" class="blob-line-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-line-code js-file-line">                  <span class="o">+</span> <span class="s1">&#39;|[\\(\\)\\^]&#39;</span>  <span class="c1">// start/end of a group, or line start</span></td>
      </tr>
      <tr>
        <td id="L611" class="blob-line-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-line-code js-file-line">                  <span class="o">+</span> <span class="s1">&#39;|[^\\x5B\\x5C\\(\\)\\^]+&#39;</span>  <span class="c1">// run of other characters</span></td>
      </tr>
      <tr>
        <td id="L612" class="blob-line-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-line-code js-file-line">                  <span class="o">+</span> <span class="s1">&#39;)&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L613" class="blob-line-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-line-code js-file-line">                  <span class="s1">&#39;g&#39;</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L614" class="blob-line-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">n</span> <span class="o">=</span> <span class="nx">parts</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L615" class="blob-line-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L616" class="blob-line-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-line-code js-file-line">          <span class="c1">// Maps captured group numbers to the number they will occupy in</span></td>
      </tr>
      <tr>
        <td id="L617" class="blob-line-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-line-code js-file-line">          <span class="c1">// the output or to -1 if that has not been determined, or to</span></td>
      </tr>
      <tr>
        <td id="L618" class="blob-line-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-line-code js-file-line">          <span class="c1">// undefined if they need not be capturing in the output.</span></td>
      </tr>
      <tr>
        <td id="L619" class="blob-line-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">capturedGroups</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L620" class="blob-line-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L621" class="blob-line-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-line-code js-file-line">          <span class="c1">// Walk over and identify back references to build the capturedGroups</span></td>
      </tr>
      <tr>
        <td id="L622" class="blob-line-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-line-code js-file-line">          <span class="c1">// mapping.</span></td>
      </tr>
      <tr>
        <td id="L623" class="blob-line-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-line-code js-file-line">          <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">groupIndex</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">n</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L624" class="blob-line-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">p</span> <span class="o">=</span> <span class="nx">parts</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L625" class="blob-line-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">p</span> <span class="o">===</span> <span class="s1">&#39;(&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L626" class="blob-line-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-line-code js-file-line">              <span class="c1">// groups are 1-indexed, so max group index is count of &#39;(&#39;</span></td>
      </tr>
      <tr>
        <td id="L627" class="blob-line-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-line-code js-file-line">              <span class="o">++</span><span class="nx">groupIndex</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L628" class="blob-line-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-line-code js-file-line">            <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="s1">&#39;\\&#39;</span> <span class="o">===</span> <span class="nx">p</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L629" class="blob-line-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-line-code js-file-line">              <span class="kd">var</span> <span class="nx">decimalValue</span> <span class="o">=</span> <span class="o">+</span><span class="nx">p</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L630" class="blob-line-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="nx">decimalValue</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L631" class="blob-line-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-line-code js-file-line">                <span class="k">if</span> <span class="p">(</span><span class="nx">decimalValue</span> <span class="o">&lt;=</span> <span class="nx">groupIndex</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L632" class="blob-line-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-line-code js-file-line">                  <span class="nx">capturedGroups</span><span class="p">[</span><span class="nx">decimalValue</span><span class="p">]</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L633" class="blob-line-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-line-code js-file-line">                <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L634" class="blob-line-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-line-code js-file-line">                  <span class="c1">// Replace with an unambiguous escape sequence so that</span></td>
      </tr>
      <tr>
        <td id="L635" class="blob-line-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-line-code js-file-line">                  <span class="c1">// an octal escape sequence does not turn into a backreference</span></td>
      </tr>
      <tr>
        <td id="L636" class="blob-line-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-line-code js-file-line">                  <span class="c1">// to a capturing group from an earlier regex.</span></td>
      </tr>
      <tr>
        <td id="L637" class="blob-line-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-line-code js-file-line">                  <span class="nx">parts</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">encodeEscape</span><span class="p">(</span><span class="nx">decimalValue</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L638" class="blob-line-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-line-code js-file-line">                <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L639" class="blob-line-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L640" class="blob-line-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L641" class="blob-line-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L642" class="blob-line-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L643" class="blob-line-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-line-code js-file-line">          <span class="c1">// Renumber groups and reduce capturing groups to non-capturing groups</span></td>
      </tr>
      <tr>
        <td id="L644" class="blob-line-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-line-code js-file-line">          <span class="c1">// where possible.</span></td>
      </tr>
      <tr>
        <td id="L645" class="blob-line-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-line-code js-file-line">          <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">capturedGroups</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L646" class="blob-line-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="o">-</span><span class="mi">1</span> <span class="o">===</span> <span class="nx">capturedGroups</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L647" class="blob-line-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-line-code js-file-line">              <span class="nx">capturedGroups</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="o">++</span><span class="nx">capturedGroupIndex</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L648" class="blob-line-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L649" class="blob-line-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L650" class="blob-line-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-line-code js-file-line">          <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">groupIndex</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">n</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L651" class="blob-line-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">p</span> <span class="o">=</span> <span class="nx">parts</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L652" class="blob-line-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">p</span> <span class="o">===</span> <span class="s1">&#39;(&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L653" class="blob-line-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-line-code js-file-line">              <span class="o">++</span><span class="nx">groupIndex</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L654" class="blob-line-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">capturedGroups</span><span class="p">[</span><span class="nx">groupIndex</span><span class="p">])</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L655" class="blob-line-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-line-code js-file-line">                <span class="nx">parts</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="s1">&#39;(?:&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L656" class="blob-line-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L657" class="blob-line-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-line-code js-file-line">            <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="s1">&#39;\\&#39;</span> <span class="o">===</span> <span class="nx">p</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L658" class="blob-line-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-line-code js-file-line">              <span class="kd">var</span> <span class="nx">decimalValue</span> <span class="o">=</span> <span class="o">+</span><span class="nx">p</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L659" class="blob-line-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="nx">decimalValue</span> <span class="o">&amp;&amp;</span> <span class="nx">decimalValue</span> <span class="o">&lt;=</span> <span class="nx">groupIndex</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L660" class="blob-line-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-line-code js-file-line">                <span class="nx">parts</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="s1">&#39;\\&#39;</span> <span class="o">+</span> <span class="nx">capturedGroups</span><span class="p">[</span><span class="nx">decimalValue</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L661" class="blob-line-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L662" class="blob-line-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L663" class="blob-line-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L664" class="blob-line-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L665" class="blob-line-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-line-code js-file-line">          <span class="c1">// Remove any prefix anchors so that the output will match anywhere.</span></td>
      </tr>
      <tr>
        <td id="L666" class="blob-line-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-line-code js-file-line">          <span class="c1">// ^^ really does mean an anchored match though.</span></td>
      </tr>
      <tr>
        <td id="L667" class="blob-line-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-line-code js-file-line">          <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">n</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L668" class="blob-line-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="s1">&#39;^&#39;</span> <span class="o">===</span> <span class="nx">parts</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="s1">&#39;^&#39;</span> <span class="o">!==</span> <span class="nx">parts</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">])</span> <span class="p">{</span> <span class="nx">parts</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L669" class="blob-line-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L670" class="blob-line-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L671" class="blob-line-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-line-code js-file-line">          <span class="c1">// Expand letters to groups to handle mixing of case-sensitive and</span></td>
      </tr>
      <tr>
        <td id="L672" class="blob-line-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-line-code js-file-line">          <span class="c1">// case-insensitive patterns if necessary.</span></td>
      </tr>
      <tr>
        <td id="L673" class="blob-line-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">regex</span><span class="p">.</span><span class="nx">ignoreCase</span> <span class="o">&amp;&amp;</span> <span class="nx">needToFoldCase</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L674" class="blob-line-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-line-code js-file-line">            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">n</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L675" class="blob-line-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-line-code js-file-line">              <span class="kd">var</span> <span class="nx">p</span> <span class="o">=</span> <span class="nx">parts</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L676" class="blob-line-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-line-code js-file-line">              <span class="kd">var</span> <span class="nx">ch0</span> <span class="o">=</span> <span class="nx">p</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L677" class="blob-line-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="nx">p</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="mi">2</span> <span class="o">&amp;&amp;</span> <span class="nx">ch0</span> <span class="o">===</span> <span class="s1">&#39;[&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L678" class="blob-line-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-line-code js-file-line">                <span class="nx">parts</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">caseFoldCharset</span><span class="p">(</span><span class="nx">p</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L679" class="blob-line-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-line-code js-file-line">              <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">ch0</span> <span class="o">!==</span> <span class="s1">&#39;\\&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L680" class="blob-line-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-line-code js-file-line">                <span class="c1">// TODO: handle letters in numeric escapes.</span></td>
      </tr>
      <tr>
        <td id="L681" class="blob-line-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-line-code js-file-line">                <span class="nx">parts</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">p</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L682" class="blob-line-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-line-code js-file-line">                    <span class="sr">/[a-zA-Z]/g</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L683" class="blob-line-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-line-code js-file-line">                    <span class="kd">function</span> <span class="p">(</span><span class="nx">ch</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L684" class="blob-line-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-line-code js-file-line">                      <span class="kd">var</span> <span class="nx">cc</span> <span class="o">=</span> <span class="nx">ch</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L685" class="blob-line-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-line-code js-file-line">                      <span class="k">return</span> <span class="s1">&#39;[&#39;</span> <span class="o">+</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="nx">cc</span> <span class="o">&amp;</span> <span class="o">~</span><span class="mi">32</span><span class="p">,</span> <span class="nx">cc</span> <span class="o">|</span> <span class="mi">32</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;]&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L686" class="blob-line-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-line-code js-file-line">                    <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L687" class="blob-line-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L688" class="blob-line-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L689" class="blob-line-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L690" class="blob-line-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L691" class="blob-line-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-line-code js-file-line">          <span class="k">return</span> <span class="nx">parts</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L692" class="blob-line-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L693" class="blob-line-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L694" class="blob-line-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">rewritten</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L695" class="blob-line-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-line-code js-file-line">        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">n</span> <span class="o">=</span> <span class="nx">regexs</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">n</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L696" class="blob-line-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">regex</span> <span class="o">=</span> <span class="nx">regexs</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L697" class="blob-line-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">regex</span><span class="p">.</span><span class="nx">global</span> <span class="o">||</span> <span class="nx">regex</span><span class="p">.</span><span class="nx">multiline</span><span class="p">)</span> <span class="p">{</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;&#39;</span> <span class="o">+</span> <span class="nx">regex</span><span class="p">);</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L698" class="blob-line-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-line-code js-file-line">          <span class="nx">rewritten</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L699" class="blob-line-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-line-code js-file-line">              <span class="s1">&#39;(?:&#39;</span> <span class="o">+</span> <span class="nx">allowAnywhereFoldCaseAndRenumberGroups</span><span class="p">(</span><span class="nx">regex</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;)&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L700" class="blob-line-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L701" class="blob-line-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L702" class="blob-line-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="nx">rewritten</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;|&#39;</span><span class="p">),</span> <span class="nx">ignoreCase</span> <span class="o">?</span> <span class="s1">&#39;gi&#39;</span> <span class="o">:</span> <span class="s1">&#39;g&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L703" class="blob-line-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L704" class="blob-line-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L705" class="blob-line-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-line-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L706" class="blob-line-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-line-code js-file-line"><span class="cm">       * Split markup into a string of source code and an array mapping ranges in</span></td>
      </tr>
      <tr>
        <td id="L707" class="blob-line-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-line-code js-file-line"><span class="cm">       * that string to the text nodes in which they appear.</span></td>
      </tr>
      <tr>
        <td id="L708" class="blob-line-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-line-code js-file-line"><span class="cm">       *</span></td>
      </tr>
      <tr>
        <td id="L709" class="blob-line-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-line-code js-file-line"><span class="cm">       * &lt;p&gt;</span></td>
      </tr>
      <tr>
        <td id="L710" class="blob-line-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-line-code js-file-line"><span class="cm">       * The HTML DOM structure:&lt;/p&gt;</span></td>
      </tr>
      <tr>
        <td id="L711" class="blob-line-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-line-code js-file-line"><span class="cm">       * &lt;pre&gt;</span></td>
      </tr>
      <tr>
        <td id="L712" class="blob-line-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-line-code js-file-line"><span class="cm">       * (Element   &quot;p&quot;</span></td>
      </tr>
      <tr>
        <td id="L713" class="blob-line-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-line-code js-file-line"><span class="cm">       *   (Element &quot;b&quot;</span></td>
      </tr>
      <tr>
        <td id="L714" class="blob-line-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-line-code js-file-line"><span class="cm">       *     (Text  &quot;print &quot;))       ; #1</span></td>
      </tr>
      <tr>
        <td id="L715" class="blob-line-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-line-code js-file-line"><span class="cm">       *   (Text    &quot;&#39;Hello &#39;&quot;)      ; #2</span></td>
      </tr>
      <tr>
        <td id="L716" class="blob-line-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-line-code js-file-line"><span class="cm">       *   (Element &quot;br&quot;)            ; #3</span></td>
      </tr>
      <tr>
        <td id="L717" class="blob-line-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-line-code js-file-line"><span class="cm">       *   (Text    &quot;  + &#39;World&#39;;&quot;)) ; #4</span></td>
      </tr>
      <tr>
        <td id="L718" class="blob-line-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-line-code js-file-line"><span class="cm">       * &lt;/pre&gt;</span></td>
      </tr>
      <tr>
        <td id="L719" class="blob-line-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-line-code js-file-line"><span class="cm">       * &lt;p&gt;</span></td>
      </tr>
      <tr>
        <td id="L720" class="blob-line-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-line-code js-file-line"><span class="cm">       * corresponds to the HTML</span></td>
      </tr>
      <tr>
        <td id="L721" class="blob-line-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-line-code js-file-line"><span class="cm">       * {@code &lt;p&gt;&lt;b&gt;print &lt;/b&gt;&#39;Hello &#39;&lt;br&gt;  + &#39;World&#39;;&lt;/p&gt;}.&lt;/p&gt;</span></td>
      </tr>
      <tr>
        <td id="L722" class="blob-line-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-line-code js-file-line"><span class="cm">       *</span></td>
      </tr>
      <tr>
        <td id="L723" class="blob-line-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-line-code js-file-line"><span class="cm">       * &lt;p&gt;</span></td>
      </tr>
      <tr>
        <td id="L724" class="blob-line-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-line-code js-file-line"><span class="cm">       * It will produce the output:&lt;/p&gt;</span></td>
      </tr>
      <tr>
        <td id="L725" class="blob-line-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-line-code js-file-line"><span class="cm">       * &lt;pre&gt;</span></td>
      </tr>
      <tr>
        <td id="L726" class="blob-line-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-line-code js-file-line"><span class="cm">       * {</span></td>
      </tr>
      <tr>
        <td id="L727" class="blob-line-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-line-code js-file-line"><span class="cm">       *   sourceCode: &quot;print &#39;Hello &#39;\n  + &#39;World&#39;;&quot;,</span></td>
      </tr>
      <tr>
        <td id="L728" class="blob-line-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-line-code js-file-line"><span class="cm">       *   //                     1          2</span></td>
      </tr>
      <tr>
        <td id="L729" class="blob-line-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-line-code js-file-line"><span class="cm">       *   //           012345678901234 5678901234567</span></td>
      </tr>
      <tr>
        <td id="L730" class="blob-line-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-line-code js-file-line"><span class="cm">       *   spans: [0, #1, 6, #2, 14, #3, 15, #4]</span></td>
      </tr>
      <tr>
        <td id="L731" class="blob-line-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-line-code js-file-line"><span class="cm">       * }</span></td>
      </tr>
      <tr>
        <td id="L732" class="blob-line-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-line-code js-file-line"><span class="cm">       * &lt;/pre&gt;</span></td>
      </tr>
      <tr>
        <td id="L733" class="blob-line-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-line-code js-file-line"><span class="cm">       * &lt;p&gt;</span></td>
      </tr>
      <tr>
        <td id="L734" class="blob-line-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-line-code js-file-line"><span class="cm">       * where #1 is a reference to the {@code &quot;print &quot;} text node above, and so</span></td>
      </tr>
      <tr>
        <td id="L735" class="blob-line-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-line-code js-file-line"><span class="cm">       * on for the other text nodes.</span></td>
      </tr>
      <tr>
        <td id="L736" class="blob-line-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-line-code js-file-line"><span class="cm">       * &lt;/p&gt;</span></td>
      </tr>
      <tr>
        <td id="L737" class="blob-line-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-line-code js-file-line"><span class="cm">       *</span></td>
      </tr>
      <tr>
        <td id="L738" class="blob-line-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-line-code js-file-line"><span class="cm">       * &lt;p&gt;</span></td>
      </tr>
      <tr>
        <td id="L739" class="blob-line-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-line-code js-file-line"><span class="cm">       * The {@code} spans array is an array of pairs.  Even elements are the start</span></td>
      </tr>
      <tr>
        <td id="L740" class="blob-line-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-line-code js-file-line"><span class="cm">       * indices of substrings, and odd elements are the text nodes (or BR elements)</span></td>
      </tr>
      <tr>
        <td id="L741" class="blob-line-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-line-code js-file-line"><span class="cm">       * that contain the text for those substrings.</span></td>
      </tr>
      <tr>
        <td id="L742" class="blob-line-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-line-code js-file-line"><span class="cm">       * Substrings continue until the next index or the end of the source.</span></td>
      </tr>
      <tr>
        <td id="L743" class="blob-line-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-line-code js-file-line"><span class="cm">       * &lt;/p&gt;</span></td>
      </tr>
      <tr>
        <td id="L744" class="blob-line-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-line-code js-file-line"><span class="cm">       *</span></td>
      </tr>
      <tr>
        <td id="L745" class="blob-line-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-line-code js-file-line"><span class="cm">       * @param {Node} node an HTML DOM subtree containing source-code.</span></td>
      </tr>
      <tr>
        <td id="L746" class="blob-line-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-line-code js-file-line"><span class="cm">       * @param {boolean} isPreformatted true if white-space in text nodes should</span></td>
      </tr>
      <tr>
        <td id="L747" class="blob-line-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-line-code js-file-line"><span class="cm">       *    be considered significant.</span></td>
      </tr>
      <tr>
        <td id="L748" class="blob-line-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-line-code js-file-line"><span class="cm">       * @return {Object} source code and the text nodes in which they occur.</span></td>
      </tr>
      <tr>
        <td id="L749" class="blob-line-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-line-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L750" class="blob-line-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-line-code js-file-line">      <span class="kd">function</span> <span class="nx">extractSourceSpans</span><span class="p">(</span><span class="nx">node</span><span class="p">,</span> <span class="nx">isPreformatted</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L751" class="blob-line-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">nocode</span> <span class="o">=</span> <span class="sr">/(?:^|\s)nocode(?:\s|$)/</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L752" class="blob-line-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L753" class="blob-line-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">chunks</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L754" class="blob-line-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L755" class="blob-line-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">spans</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L756" class="blob-line-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">k</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L757" class="blob-line-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L758" class="blob-line-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-line-code js-file-line">        <span class="kd">function</span> <span class="nx">walk</span><span class="p">(</span><span class="nx">node</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L759" class="blob-line-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">type</span> <span class="o">=</span> <span class="nx">node</span><span class="p">.</span><span class="nx">nodeType</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L760" class="blob-line-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">type</span> <span class="o">==</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span>  <span class="c1">// Element</span></td>
      </tr>
      <tr>
        <td id="L761" class="blob-line-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">nocode</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">node</span><span class="p">.</span><span class="nx">className</span><span class="p">))</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L762" class="blob-line-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-line-code js-file-line">            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">child</span> <span class="o">=</span> <span class="nx">node</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">;</span> <span class="nx">child</span><span class="p">;</span> <span class="nx">child</span> <span class="o">=</span> <span class="nx">child</span><span class="p">.</span><span class="nx">nextSibling</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L763" class="blob-line-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-line-code js-file-line">              <span class="nx">walk</span><span class="p">(</span><span class="nx">child</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L764" class="blob-line-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L765" class="blob-line-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">nodeName</span> <span class="o">=</span> <span class="nx">node</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L766" class="blob-line-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="s1">&#39;br&#39;</span> <span class="o">===</span> <span class="nx">nodeName</span> <span class="o">||</span> <span class="s1">&#39;li&#39;</span> <span class="o">===</span> <span class="nx">nodeName</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L767" class="blob-line-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-line-code js-file-line">              <span class="nx">chunks</span><span class="p">[</span><span class="nx">k</span><span class="p">]</span> <span class="o">=</span> <span class="s1">&#39;\n&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L768" class="blob-line-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-line-code js-file-line">              <span class="nx">spans</span><span class="p">[</span><span class="nx">k</span> <span class="o">&lt;&lt;</span> <span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">length</span><span class="o">++</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L769" class="blob-line-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-line-code js-file-line">              <span class="nx">spans</span><span class="p">[(</span><span class="nx">k</span><span class="o">++</span> <span class="o">&lt;&lt;</span> <span class="mi">1</span><span class="p">)</span> <span class="o">|</span> <span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">node</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L770" class="blob-line-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L771" class="blob-line-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-line-code js-file-line">          <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">type</span> <span class="o">==</span> <span class="mi">3</span> <span class="o">||</span> <span class="nx">type</span> <span class="o">==</span> <span class="mi">4</span><span class="p">)</span> <span class="p">{</span>  <span class="c1">// Text</span></td>
      </tr>
      <tr>
        <td id="L772" class="blob-line-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">text</span> <span class="o">=</span> <span class="nx">node</span><span class="p">.</span><span class="nx">nodeValue</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L773" class="blob-line-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">text</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L774" class="blob-line-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">isPreformatted</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L775" class="blob-line-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-line-code js-file-line">                <span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[ \t\r\n]+/g</span><span class="p">,</span> <span class="s1">&#39; &#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L776" class="blob-line-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-line-code js-file-line">              <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L777" class="blob-line-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-line-code js-file-line">                <span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\r\n?/g</span><span class="p">,</span> <span class="s1">&#39;\n&#39;</span><span class="p">);</span>  <span class="c1">// Normalize newlines.</span></td>
      </tr>
      <tr>
        <td id="L778" class="blob-line-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L779" class="blob-line-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-line-code js-file-line">              <span class="c1">// TODO: handle tabs here?</span></td>
      </tr>
      <tr>
        <td id="L780" class="blob-line-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-line-code js-file-line">              <span class="nx">chunks</span><span class="p">[</span><span class="nx">k</span><span class="p">]</span> <span class="o">=</span> <span class="nx">text</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L781" class="blob-line-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-line-code js-file-line">              <span class="nx">spans</span><span class="p">[</span><span class="nx">k</span> <span class="o">&lt;&lt;</span> <span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">length</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L782" class="blob-line-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-line-code js-file-line">              <span class="nx">length</span> <span class="o">+=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L783" class="blob-line-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-line-code js-file-line">              <span class="nx">spans</span><span class="p">[(</span><span class="nx">k</span><span class="o">++</span> <span class="o">&lt;&lt;</span> <span class="mi">1</span><span class="p">)</span> <span class="o">|</span> <span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">node</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L784" class="blob-line-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L785" class="blob-line-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L786" class="blob-line-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L787" class="blob-line-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L788" class="blob-line-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-line-code js-file-line">        <span class="nx">walk</span><span class="p">(</span><span class="nx">node</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L789" class="blob-line-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L790" class="blob-line-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L791" class="blob-line-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-line-code js-file-line">          <span class="nx">sourceCode</span><span class="o">:</span> <span class="nx">chunks</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n$/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L792" class="blob-line-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-line-code js-file-line">          <span class="nx">spans</span><span class="o">:</span> <span class="nx">spans</span></td>
      </tr>
      <tr>
        <td id="L793" class="blob-line-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-line-code js-file-line">        <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L794" class="blob-line-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L795" class="blob-line-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L796" class="blob-line-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-line-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L797" class="blob-line-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-line-code js-file-line"><span class="cm">       * Apply the given language handler to sourceCode and add the resulting</span></td>
      </tr>
      <tr>
        <td id="L798" class="blob-line-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-line-code js-file-line"><span class="cm">       * decorations to out.</span></td>
      </tr>
      <tr>
        <td id="L799" class="blob-line-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-line-code js-file-line"><span class="cm">       * @param {number} basePos the index of sourceCode within the chunk of source</span></td>
      </tr>
      <tr>
        <td id="L800" class="blob-line-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-line-code js-file-line"><span class="cm">       *    whose decorations are already present on out.</span></td>
      </tr>
      <tr>
        <td id="L801" class="blob-line-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-line-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L802" class="blob-line-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-line-code js-file-line">      <span class="kd">function</span> <span class="nx">appendDecorations</span><span class="p">(</span><span class="nx">basePos</span><span class="p">,</span> <span class="nx">sourceCode</span><span class="p">,</span> <span class="nx">langHandler</span><span class="p">,</span> <span class="nx">out</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L803" class="blob-line-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">sourceCode</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L804" class="blob-line-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">job</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L805" class="blob-line-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-line-code js-file-line">          <span class="nx">sourceCode</span><span class="o">:</span> <span class="nx">sourceCode</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L806" class="blob-line-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-line-code js-file-line">          <span class="nx">basePos</span><span class="o">:</span> <span class="nx">basePos</span></td>
      </tr>
      <tr>
        <td id="L807" class="blob-line-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-line-code js-file-line">        <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L808" class="blob-line-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-line-code js-file-line">        <span class="nx">langHandler</span><span class="p">(</span><span class="nx">job</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L809" class="blob-line-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-line-code js-file-line">        <span class="nx">out</span><span class="p">.</span><span class="nx">push</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">out</span><span class="p">,</span> <span class="nx">job</span><span class="p">.</span><span class="nx">decorations</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L810" class="blob-line-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L811" class="blob-line-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L812" class="blob-line-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">notWs</span> <span class="o">=</span> <span class="sr">/\S/</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L813" class="blob-line-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L814" class="blob-line-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-line-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L815" class="blob-line-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-line-code js-file-line"><span class="cm">       * Given an element, if it contains only one child element and any text nodes</span></td>
      </tr>
      <tr>
        <td id="L816" class="blob-line-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-line-code js-file-line"><span class="cm">       * it contains contain only space characters, return the sole child element.</span></td>
      </tr>
      <tr>
        <td id="L817" class="blob-line-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-line-code js-file-line"><span class="cm">       * Otherwise returns undefined.</span></td>
      </tr>
      <tr>
        <td id="L818" class="blob-line-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-line-code js-file-line"><span class="cm">       * &lt;p&gt;</span></td>
      </tr>
      <tr>
        <td id="L819" class="blob-line-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-line-code js-file-line"><span class="cm">       * This is meant to return the CODE element in {@code &lt;pre&gt;&lt;code ...&gt;} when</span></td>
      </tr>
      <tr>
        <td id="L820" class="blob-line-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-line-code js-file-line"><span class="cm">       * there is a single child element that contains all the non-space textual</span></td>
      </tr>
      <tr>
        <td id="L821" class="blob-line-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-line-code js-file-line"><span class="cm">       * content, but not to return anything where there are multiple child elements</span></td>
      </tr>
      <tr>
        <td id="L822" class="blob-line-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-line-code js-file-line"><span class="cm">       * as in {@code &lt;pre&gt;&lt;code&gt;...&lt;/code&gt;&lt;code&gt;...&lt;/code&gt;&lt;/pre&gt;} or when there</span></td>
      </tr>
      <tr>
        <td id="L823" class="blob-line-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-line-code js-file-line"><span class="cm">       * is textual content.</span></td>
      </tr>
      <tr>
        <td id="L824" class="blob-line-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-line-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L825" class="blob-line-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-line-code js-file-line">      <span class="kd">function</span> <span class="nx">childContentWrapper</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L826" class="blob-line-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">wrapper</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L827" class="blob-line-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-line-code js-file-line">        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">c</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">;</span> <span class="nx">c</span><span class="p">;</span> <span class="nx">c</span> <span class="o">=</span> <span class="nx">c</span><span class="p">.</span><span class="nx">nextSibling</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L828" class="blob-line-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">type</span> <span class="o">=</span> <span class="nx">c</span><span class="p">.</span><span class="nx">nodeType</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L829" class="blob-line-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-line-code js-file-line">          <span class="nx">wrapper</span> <span class="o">=</span> <span class="p">(</span><span class="nx">type</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span>  <span class="c1">// Element Node</span></td>
      </tr>
      <tr>
        <td id="L830" class="blob-line-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-line-code js-file-line">              <span class="o">?</span> <span class="p">(</span><span class="nx">wrapper</span> <span class="o">?</span> <span class="nx">element</span> <span class="o">:</span> <span class="nx">c</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L831" class="blob-line-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-line-code js-file-line">              <span class="o">:</span> <span class="p">(</span><span class="nx">type</span> <span class="o">===</span> <span class="mi">3</span><span class="p">)</span>  <span class="c1">// Text Node</span></td>
      </tr>
      <tr>
        <td id="L832" class="blob-line-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-line-code js-file-line">              <span class="o">?</span> <span class="p">(</span><span class="nx">notWs</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">nodeValue</span><span class="p">)</span> <span class="o">?</span> <span class="nx">element</span> <span class="o">:</span> <span class="nx">wrapper</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L833" class="blob-line-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-line-code js-file-line">              <span class="o">:</span> <span class="nx">wrapper</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L834" class="blob-line-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L835" class="blob-line-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">wrapper</span> <span class="o">===</span> <span class="nx">element</span> <span class="o">?</span> <span class="kc">undefined</span> <span class="o">:</span> <span class="nx">wrapper</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L836" class="blob-line-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L837" class="blob-line-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L838" class="blob-line-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-line-code js-file-line">      <span class="cm">/** Given triples of [style, pattern, context] returns a lexing function,</span></td>
      </tr>
      <tr>
        <td id="L839" class="blob-line-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-line-code js-file-line"><span class="cm">        * The lexing function interprets the patterns to find token boundaries and</span></td>
      </tr>
      <tr>
        <td id="L840" class="blob-line-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-line-code js-file-line"><span class="cm">        * returns a decoration list of the form</span></td>
      </tr>
      <tr>
        <td id="L841" class="blob-line-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-line-code js-file-line"><span class="cm">        * [index_0, style_0, index_1, style_1, ..., index_n, style_n]</span></td>
      </tr>
      <tr>
        <td id="L842" class="blob-line-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-line-code js-file-line"><span class="cm">        * where index_n is an index into the sourceCode, and style_n is a style</span></td>
      </tr>
      <tr>
        <td id="L843" class="blob-line-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-line-code js-file-line"><span class="cm">        * constant like PR_PLAIN.  index_n-1 &lt;= index_n, and style_n-1 applies to</span></td>
      </tr>
      <tr>
        <td id="L844" class="blob-line-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-line-code js-file-line"><span class="cm">        * all characters in sourceCode[index_n-1:index_n].</span></td>
      </tr>
      <tr>
        <td id="L845" class="blob-line-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-line-code js-file-line"><span class="cm">        *</span></td>
      </tr>
      <tr>
        <td id="L846" class="blob-line-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-line-code js-file-line"><span class="cm">        * The stylePatterns is a list whose elements have the form</span></td>
      </tr>
      <tr>
        <td id="L847" class="blob-line-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-line-code js-file-line"><span class="cm">        * [style : string, pattern : RegExp, DEPRECATED, shortcut : string].</span></td>
      </tr>
      <tr>
        <td id="L848" class="blob-line-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-line-code js-file-line"><span class="cm">        *</span></td>
      </tr>
      <tr>
        <td id="L849" class="blob-line-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-line-code js-file-line"><span class="cm">        * Style is a style constant like PR_PLAIN, or can be a string of the</span></td>
      </tr>
      <tr>
        <td id="L850" class="blob-line-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-line-code js-file-line"><span class="cm">        * form &#39;lang-FOO&#39;, where FOO is a language extension describing the</span></td>
      </tr>
      <tr>
        <td id="L851" class="blob-line-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-line-code js-file-line"><span class="cm">        * language of the portion of the token in $1 after pattern executes.</span></td>
      </tr>
      <tr>
        <td id="L852" class="blob-line-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-line-code js-file-line"><span class="cm">        * E.g., if style is &#39;lang-lisp&#39;, and group 1 contains the text</span></td>
      </tr>
      <tr>
        <td id="L853" class="blob-line-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-line-code js-file-line"><span class="cm">        * &#39;(hello (world))&#39;, then that portion of the token will be passed to the</span></td>
      </tr>
      <tr>
        <td id="L854" class="blob-line-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-line-code js-file-line"><span class="cm">        * registered lisp handler for formatting.</span></td>
      </tr>
      <tr>
        <td id="L855" class="blob-line-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-line-code js-file-line"><span class="cm">        * The text before and after group 1 will be restyled using this decorator</span></td>
      </tr>
      <tr>
        <td id="L856" class="blob-line-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-line-code js-file-line"><span class="cm">        * so decorators should take care that this doesn&#39;t result in infinite</span></td>
      </tr>
      <tr>
        <td id="L857" class="blob-line-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-line-code js-file-line"><span class="cm">        * recursion.  For example, the HTML lexer rule for SCRIPT elements looks</span></td>
      </tr>
      <tr>
        <td id="L858" class="blob-line-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-line-code js-file-line"><span class="cm">        * something like [&#39;lang-js&#39;, /&lt;[s]cript&gt;(.+?)&lt;\/script&gt;/].  This may match</span></td>
      </tr>
      <tr>
        <td id="L859" class="blob-line-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-line-code js-file-line"><span class="cm">        * &#39;&lt;script&gt;foo()&lt;\/script&gt;&#39;, which would cause the current decorator to</span></td>
      </tr>
      <tr>
        <td id="L860" class="blob-line-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-line-code js-file-line"><span class="cm">        * be called with &#39;&lt;script&gt;&#39; which would not match the same rule since</span></td>
      </tr>
      <tr>
        <td id="L861" class="blob-line-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-line-code js-file-line"><span class="cm">        * group 1 must not be empty, so it would be instead styled as PR_TAG by</span></td>
      </tr>
      <tr>
        <td id="L862" class="blob-line-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-line-code js-file-line"><span class="cm">        * the generic tag rule.  The handler registered for the &#39;js&#39; extension would</span></td>
      </tr>
      <tr>
        <td id="L863" class="blob-line-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-line-code js-file-line"><span class="cm">        * then be called with &#39;foo()&#39;, and finally, the current decorator would</span></td>
      </tr>
      <tr>
        <td id="L864" class="blob-line-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-line-code js-file-line"><span class="cm">        * be called with &#39;&lt;\/script&gt;&#39; which would not match the original rule and</span></td>
      </tr>
      <tr>
        <td id="L865" class="blob-line-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-line-code js-file-line"><span class="cm">        * so the generic tag rule would identify it as a tag.</span></td>
      </tr>
      <tr>
        <td id="L866" class="blob-line-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-line-code js-file-line"><span class="cm">        *</span></td>
      </tr>
      <tr>
        <td id="L867" class="blob-line-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-line-code js-file-line"><span class="cm">        * Pattern must only match prefixes, and if it matches a prefix, then that</span></td>
      </tr>
      <tr>
        <td id="L868" class="blob-line-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-line-code js-file-line"><span class="cm">        * match is considered a token with the same style.</span></td>
      </tr>
      <tr>
        <td id="L869" class="blob-line-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-line-code js-file-line"><span class="cm">        *</span></td>
      </tr>
      <tr>
        <td id="L870" class="blob-line-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-line-code js-file-line"><span class="cm">        * Context is applied to the last non-whitespace, non-comment token</span></td>
      </tr>
      <tr>
        <td id="L871" class="blob-line-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-line-code js-file-line"><span class="cm">        * recognized.</span></td>
      </tr>
      <tr>
        <td id="L872" class="blob-line-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-line-code js-file-line"><span class="cm">        *</span></td>
      </tr>
      <tr>
        <td id="L873" class="blob-line-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-line-code js-file-line"><span class="cm">        * Shortcut is an optional string of characters, any of which, if the first</span></td>
      </tr>
      <tr>
        <td id="L874" class="blob-line-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-line-code js-file-line"><span class="cm">        * character, gurantee that this pattern and only this pattern matches.</span></td>
      </tr>
      <tr>
        <td id="L875" class="blob-line-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-line-code js-file-line"><span class="cm">        *</span></td>
      </tr>
      <tr>
        <td id="L876" class="blob-line-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-line-code js-file-line"><span class="cm">        * @param {Array} shortcutStylePatterns patterns that always start with</span></td>
      </tr>
      <tr>
        <td id="L877" class="blob-line-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-line-code js-file-line"><span class="cm">        *   a known character.  Must have a shortcut string.</span></td>
      </tr>
      <tr>
        <td id="L878" class="blob-line-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-line-code js-file-line"><span class="cm">        * @param {Array} fallthroughStylePatterns patterns that will be tried in</span></td>
      </tr>
      <tr>
        <td id="L879" class="blob-line-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-line-code js-file-line"><span class="cm">        *   order if the shortcut ones fail.  May have shortcuts.</span></td>
      </tr>
      <tr>
        <td id="L880" class="blob-line-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-line-code js-file-line"><span class="cm">        *</span></td>
      </tr>
      <tr>
        <td id="L881" class="blob-line-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-line-code js-file-line"><span class="cm">        * @return {function (Object)} a</span></td>
      </tr>
      <tr>
        <td id="L882" class="blob-line-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-line-code js-file-line"><span class="cm">        *   function that takes source code and returns a list of decorations.</span></td>
      </tr>
      <tr>
        <td id="L883" class="blob-line-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-line-code js-file-line"><span class="cm">        */</span></td>
      </tr>
      <tr>
        <td id="L884" class="blob-line-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-line-code js-file-line">      <span class="kd">function</span> <span class="nx">createSimpleLexer</span><span class="p">(</span><span class="nx">shortcutStylePatterns</span><span class="p">,</span> <span class="nx">fallthroughStylePatterns</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L885" class="blob-line-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">shortcuts</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L886" class="blob-line-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">tokenizer</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L887" class="blob-line-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-line-code js-file-line">        <span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L888" class="blob-line-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">allPatterns</span> <span class="o">=</span> <span class="nx">shortcutStylePatterns</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">fallthroughStylePatterns</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L889" class="blob-line-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">allRegexs</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L890" class="blob-line-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">regexKeys</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L891" class="blob-line-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-line-code js-file-line">          <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">n</span> <span class="o">=</span> <span class="nx">allPatterns</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">n</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L892" class="blob-line-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">patternParts</span> <span class="o">=</span> <span class="nx">allPatterns</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L893" class="blob-line-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">shortcutChars</span> <span class="o">=</span> <span class="nx">patternParts</span><span class="p">[</span><span class="mi">3</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L894" class="blob-line-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">shortcutChars</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L895" class="blob-line-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-line-code js-file-line">              <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">c</span> <span class="o">=</span> <span class="nx">shortcutChars</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">--</span><span class="nx">c</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L896" class="blob-line-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-line-code js-file-line">                <span class="nx">shortcuts</span><span class="p">[</span><span class="nx">shortcutChars</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">c</span><span class="p">)]</span> <span class="o">=</span> <span class="nx">patternParts</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L897" class="blob-line-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L898" class="blob-line-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L899" class="blob-line-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">regex</span> <span class="o">=</span> <span class="nx">patternParts</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L900" class="blob-line-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">k</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span> <span class="o">+</span> <span class="nx">regex</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L901" class="blob-line-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">regexKeys</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">k</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L902" class="blob-line-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-line-code js-file-line">              <span class="nx">allRegexs</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">regex</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L903" class="blob-line-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-line-code js-file-line">              <span class="nx">regexKeys</span><span class="p">[</span><span class="nx">k</span><span class="p">]</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L904" class="blob-line-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L905" class="blob-line-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L906" class="blob-line-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-line-code js-file-line">          <span class="nx">allRegexs</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="sr">/[\0-\uffff]/</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L907" class="blob-line-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-line-code js-file-line">          <span class="nx">tokenizer</span> <span class="o">=</span> <span class="nx">combinePrefixPatterns</span><span class="p">(</span><span class="nx">allRegexs</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L908" class="blob-line-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-line-code js-file-line">        <span class="p">})();</span></td>
      </tr>
      <tr>
        <td id="L909" class="blob-line-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L910" class="blob-line-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">nPatterns</span> <span class="o">=</span> <span class="nx">fallthroughStylePatterns</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L911" class="blob-line-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L912" class="blob-line-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-line-code js-file-line">        <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L913" class="blob-line-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-line-code js-file-line"><span class="cm">         * Lexes job.sourceCode and produces an output array job.decorations of</span></td>
      </tr>
      <tr>
        <td id="L914" class="blob-line-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-line-code js-file-line"><span class="cm">         * style classes preceded by the position at which they start in</span></td>
      </tr>
      <tr>
        <td id="L915" class="blob-line-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-line-code js-file-line"><span class="cm">         * job.sourceCode in order.</span></td>
      </tr>
      <tr>
        <td id="L916" class="blob-line-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-line-code js-file-line"><span class="cm">         *</span></td>
      </tr>
      <tr>
        <td id="L917" class="blob-line-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-line-code js-file-line"><span class="cm">         * @param {Object} job an object like &lt;pre&gt;{</span></td>
      </tr>
      <tr>
        <td id="L918" class="blob-line-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-line-code js-file-line"><span class="cm">         *    sourceCode: {string} sourceText plain text,</span></td>
      </tr>
      <tr>
        <td id="L919" class="blob-line-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-line-code js-file-line"><span class="cm">         *    basePos: {int} position of job.sourceCode in the larger chunk of</span></td>
      </tr>
      <tr>
        <td id="L920" class="blob-line-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-line-code js-file-line"><span class="cm">         *        sourceCode.</span></td>
      </tr>
      <tr>
        <td id="L921" class="blob-line-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-line-code js-file-line"><span class="cm">         * }&lt;/pre&gt;</span></td>
      </tr>
      <tr>
        <td id="L922" class="blob-line-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-line-code js-file-line"><span class="cm">         */</span></td>
      </tr>
      <tr>
        <td id="L923" class="blob-line-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">decorate</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">job</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L924" class="blob-line-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">sourceCode</span> <span class="o">=</span> <span class="nx">job</span><span class="p">.</span><span class="nx">sourceCode</span><span class="p">,</span> <span class="nx">basePos</span> <span class="o">=</span> <span class="nx">job</span><span class="p">.</span><span class="nx">basePos</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L925" class="blob-line-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-line-code js-file-line">          <span class="cm">/** Even entries are positions in source in ascending order.  Odd enties</span></td>
      </tr>
      <tr>
        <td id="L926" class="blob-line-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-line-code js-file-line"><span class="cm">            * are style markers (e.g., PR_COMMENT) that run from that position until</span></td>
      </tr>
      <tr>
        <td id="L927" class="blob-line-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-line-code js-file-line"><span class="cm">            * the end.</span></td>
      </tr>
      <tr>
        <td id="L928" class="blob-line-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-line-code js-file-line"><span class="cm">            * @type {Array.&lt;number|string&gt;}</span></td>
      </tr>
      <tr>
        <td id="L929" class="blob-line-num js-line-number" data-line-number="929"></td>
        <td id="LC929" class="blob-line-code js-file-line"><span class="cm">            */</span></td>
      </tr>
      <tr>
        <td id="L930" class="blob-line-num js-line-number" data-line-number="930"></td>
        <td id="LC930" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">decorations</span> <span class="o">=</span> <span class="p">[</span><span class="nx">basePos</span><span class="p">,</span> <span class="nx">PR_PLAIN</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L931" class="blob-line-num js-line-number" data-line-number="931"></td>
        <td id="LC931" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">pos</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>  <span class="c1">// index into sourceCode</span></td>
      </tr>
      <tr>
        <td id="L932" class="blob-line-num js-line-number" data-line-number="932"></td>
        <td id="LC932" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">tokens</span> <span class="o">=</span> <span class="nx">sourceCode</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">tokenizer</span><span class="p">)</span> <span class="o">||</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L933" class="blob-line-num js-line-number" data-line-number="933"></td>
        <td id="LC933" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">styleCache</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L934" class="blob-line-num js-line-number" data-line-number="934"></td>
        <td id="LC934" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L935" class="blob-line-num js-line-number" data-line-number="935"></td>
        <td id="LC935" class="blob-line-code js-file-line">          <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">ti</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">nTokens</span> <span class="o">=</span> <span class="nx">tokens</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">ti</span> <span class="o">&lt;</span> <span class="nx">nTokens</span><span class="p">;</span> <span class="o">++</span><span class="nx">ti</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L936" class="blob-line-num js-line-number" data-line-number="936"></td>
        <td id="LC936" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">token</span> <span class="o">=</span> <span class="nx">tokens</span><span class="p">[</span><span class="nx">ti</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L937" class="blob-line-num js-line-number" data-line-number="937"></td>
        <td id="LC937" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">style</span> <span class="o">=</span> <span class="nx">styleCache</span><span class="p">[</span><span class="nx">token</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L938" class="blob-line-num js-line-number" data-line-number="938"></td>
        <td id="LC938" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">match</span> <span class="o">=</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L939" class="blob-line-num js-line-number" data-line-number="939"></td>
        <td id="LC939" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L940" class="blob-line-num js-line-number" data-line-number="940"></td>
        <td id="LC940" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">isEmbedded</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L941" class="blob-line-num js-line-number" data-line-number="941"></td>
        <td id="LC941" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">style</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L942" class="blob-line-num js-line-number" data-line-number="942"></td>
        <td id="LC942" class="blob-line-code js-file-line">              <span class="nx">isEmbedded</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L943" class="blob-line-num js-line-number" data-line-number="943"></td>
        <td id="LC943" class="blob-line-code js-file-line">            <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L944" class="blob-line-num js-line-number" data-line-number="944"></td>
        <td id="LC944" class="blob-line-code js-file-line">              <span class="kd">var</span> <span class="nx">patternParts</span> <span class="o">=</span> <span class="nx">shortcuts</span><span class="p">[</span><span class="nx">token</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)];</span></td>
      </tr>
      <tr>
        <td id="L945" class="blob-line-num js-line-number" data-line-number="945"></td>
        <td id="LC945" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="nx">patternParts</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L946" class="blob-line-num js-line-number" data-line-number="946"></td>
        <td id="LC946" class="blob-line-code js-file-line">                <span class="nx">match</span> <span class="o">=</span> <span class="nx">token</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">patternParts</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L947" class="blob-line-num js-line-number" data-line-number="947"></td>
        <td id="LC947" class="blob-line-code js-file-line">                <span class="nx">style</span> <span class="o">=</span> <span class="nx">patternParts</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L948" class="blob-line-num js-line-number" data-line-number="948"></td>
        <td id="LC948" class="blob-line-code js-file-line">              <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L949" class="blob-line-num js-line-number" data-line-number="949"></td>
        <td id="LC949" class="blob-line-code js-file-line">                <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">nPatterns</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L950" class="blob-line-num js-line-number" data-line-number="950"></td>
        <td id="LC950" class="blob-line-code js-file-line">                  <span class="nx">patternParts</span> <span class="o">=</span> <span class="nx">fallthroughStylePatterns</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L951" class="blob-line-num js-line-number" data-line-number="951"></td>
        <td id="LC951" class="blob-line-code js-file-line">                  <span class="nx">match</span> <span class="o">=</span> <span class="nx">token</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">patternParts</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L952" class="blob-line-num js-line-number" data-line-number="952"></td>
        <td id="LC952" class="blob-line-code js-file-line">                  <span class="k">if</span> <span class="p">(</span><span class="nx">match</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L953" class="blob-line-num js-line-number" data-line-number="953"></td>
        <td id="LC953" class="blob-line-code js-file-line">                    <span class="nx">style</span> <span class="o">=</span> <span class="nx">patternParts</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L954" class="blob-line-num js-line-number" data-line-number="954"></td>
        <td id="LC954" class="blob-line-code js-file-line">                    <span class="k">break</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L955" class="blob-line-num js-line-number" data-line-number="955"></td>
        <td id="LC955" class="blob-line-code js-file-line">                  <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L956" class="blob-line-num js-line-number" data-line-number="956"></td>
        <td id="LC956" class="blob-line-code js-file-line">                <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L957" class="blob-line-num js-line-number" data-line-number="957"></td>
        <td id="LC957" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L958" class="blob-line-num js-line-number" data-line-number="958"></td>
        <td id="LC958" class="blob-line-code js-file-line">                <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">match</span><span class="p">)</span> <span class="p">{</span>  <span class="c1">// make sure that we make progress</span></td>
      </tr>
      <tr>
        <td id="L959" class="blob-line-num js-line-number" data-line-number="959"></td>
        <td id="LC959" class="blob-line-code js-file-line">                  <span class="nx">style</span> <span class="o">=</span> <span class="nx">PR_PLAIN</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L960" class="blob-line-num js-line-number" data-line-number="960"></td>
        <td id="LC960" class="blob-line-code js-file-line">                <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L961" class="blob-line-num js-line-number" data-line-number="961"></td>
        <td id="LC961" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L962" class="blob-line-num js-line-number" data-line-number="962"></td>
        <td id="LC962" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L963" class="blob-line-num js-line-number" data-line-number="963"></td>
        <td id="LC963" class="blob-line-code js-file-line">              <span class="nx">isEmbedded</span> <span class="o">=</span> <span class="nx">style</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="mi">5</span> <span class="o">&amp;&amp;</span> <span class="s1">&#39;lang-&#39;</span> <span class="o">===</span> <span class="nx">style</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">5</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L964" class="blob-line-num js-line-number" data-line-number="964"></td>
        <td id="LC964" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="nx">isEmbedded</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="p">(</span><span class="nx">match</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">match</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L965" class="blob-line-num js-line-number" data-line-number="965"></td>
        <td id="LC965" class="blob-line-code js-file-line">                <span class="nx">isEmbedded</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L966" class="blob-line-num js-line-number" data-line-number="966"></td>
        <td id="LC966" class="blob-line-code js-file-line">                <span class="nx">style</span> <span class="o">=</span> <span class="nx">PR_SOURCE</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L967" class="blob-line-num js-line-number" data-line-number="967"></td>
        <td id="LC967" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L968" class="blob-line-num js-line-number" data-line-number="968"></td>
        <td id="LC968" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L969" class="blob-line-num js-line-number" data-line-number="969"></td>
        <td id="LC969" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">isEmbedded</span><span class="p">)</span> <span class="p">{</span> <span class="nx">styleCache</span><span class="p">[</span><span class="nx">token</span><span class="p">]</span> <span class="o">=</span> <span class="nx">style</span><span class="p">;</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L970" class="blob-line-num js-line-number" data-line-number="970"></td>
        <td id="LC970" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L971" class="blob-line-num js-line-number" data-line-number="971"></td>
        <td id="LC971" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L972" class="blob-line-num js-line-number" data-line-number="972"></td>
        <td id="LC972" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">tokenStart</span> <span class="o">=</span> <span class="nx">pos</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L973" class="blob-line-num js-line-number" data-line-number="973"></td>
        <td id="LC973" class="blob-line-code js-file-line">            <span class="nx">pos</span> <span class="o">+=</span> <span class="nx">token</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L974" class="blob-line-num js-line-number" data-line-number="974"></td>
        <td id="LC974" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L975" class="blob-line-num js-line-number" data-line-number="975"></td>
        <td id="LC975" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">isEmbedded</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L976" class="blob-line-num js-line-number" data-line-number="976"></td>
        <td id="LC976" class="blob-line-code js-file-line">              <span class="nx">decorations</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">basePos</span> <span class="o">+</span> <span class="nx">tokenStart</span><span class="p">,</span> <span class="nx">style</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L977" class="blob-line-num js-line-number" data-line-number="977"></td>
        <td id="LC977" class="blob-line-code js-file-line">            <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>  <span class="c1">// Treat group 1 as an embedded block of source code.</span></td>
      </tr>
      <tr>
        <td id="L978" class="blob-line-num js-line-number" data-line-number="978"></td>
        <td id="LC978" class="blob-line-code js-file-line">              <span class="kd">var</span> <span class="nx">embeddedSource</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L979" class="blob-line-num js-line-number" data-line-number="979"></td>
        <td id="LC979" class="blob-line-code js-file-line">              <span class="kd">var</span> <span class="nx">embeddedSourceStart</span> <span class="o">=</span> <span class="nx">token</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">embeddedSource</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L980" class="blob-line-num js-line-number" data-line-number="980"></td>
        <td id="LC980" class="blob-line-code js-file-line">              <span class="kd">var</span> <span class="nx">embeddedSourceEnd</span> <span class="o">=</span> <span class="nx">embeddedSourceStart</span> <span class="o">+</span> <span class="nx">embeddedSource</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L981" class="blob-line-num js-line-number" data-line-number="981"></td>
        <td id="LC981" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">2</span><span class="p">])</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L982" class="blob-line-num js-line-number" data-line-number="982"></td>
        <td id="LC982" class="blob-line-code js-file-line">                <span class="c1">// If embeddedSource can be blank, then it would match at the</span></td>
      </tr>
      <tr>
        <td id="L983" class="blob-line-num js-line-number" data-line-number="983"></td>
        <td id="LC983" class="blob-line-code js-file-line">                <span class="c1">// beginning which would cause us to infinitely recurse on the</span></td>
      </tr>
      <tr>
        <td id="L984" class="blob-line-num js-line-number" data-line-number="984"></td>
        <td id="LC984" class="blob-line-code js-file-line">                <span class="c1">// entire token, so we catch the right context in match[2].</span></td>
      </tr>
      <tr>
        <td id="L985" class="blob-line-num js-line-number" data-line-number="985"></td>
        <td id="LC985" class="blob-line-code js-file-line">                <span class="nx">embeddedSourceEnd</span> <span class="o">=</span> <span class="nx">token</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="nx">match</span><span class="p">[</span><span class="mi">2</span><span class="p">].</span><span class="nx">length</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L986" class="blob-line-num js-line-number" data-line-number="986"></td>
        <td id="LC986" class="blob-line-code js-file-line">                <span class="nx">embeddedSourceStart</span> <span class="o">=</span> <span class="nx">embeddedSourceEnd</span> <span class="o">-</span> <span class="nx">embeddedSource</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L987" class="blob-line-num js-line-number" data-line-number="987"></td>
        <td id="LC987" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L988" class="blob-line-num js-line-number" data-line-number="988"></td>
        <td id="LC988" class="blob-line-code js-file-line">              <span class="kd">var</span> <span class="nx">lang</span> <span class="o">=</span> <span class="nx">style</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">5</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L989" class="blob-line-num js-line-number" data-line-number="989"></td>
        <td id="LC989" class="blob-line-code js-file-line">              <span class="c1">// Decorate the left of the embedded source</span></td>
      </tr>
      <tr>
        <td id="L990" class="blob-line-num js-line-number" data-line-number="990"></td>
        <td id="LC990" class="blob-line-code js-file-line">              <span class="nx">appendDecorations</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L991" class="blob-line-num js-line-number" data-line-number="991"></td>
        <td id="LC991" class="blob-line-code js-file-line">                  <span class="nx">basePos</span> <span class="o">+</span> <span class="nx">tokenStart</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L992" class="blob-line-num js-line-number" data-line-number="992"></td>
        <td id="LC992" class="blob-line-code js-file-line">                  <span class="nx">token</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">embeddedSourceStart</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L993" class="blob-line-num js-line-number" data-line-number="993"></td>
        <td id="LC993" class="blob-line-code js-file-line">                  <span class="nx">decorate</span><span class="p">,</span> <span class="nx">decorations</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L994" class="blob-line-num js-line-number" data-line-number="994"></td>
        <td id="LC994" class="blob-line-code js-file-line">              <span class="c1">// Decorate the embedded source</span></td>
      </tr>
      <tr>
        <td id="L995" class="blob-line-num js-line-number" data-line-number="995"></td>
        <td id="LC995" class="blob-line-code js-file-line">              <span class="nx">appendDecorations</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L996" class="blob-line-num js-line-number" data-line-number="996"></td>
        <td id="LC996" class="blob-line-code js-file-line">                  <span class="nx">basePos</span> <span class="o">+</span> <span class="nx">tokenStart</span> <span class="o">+</span> <span class="nx">embeddedSourceStart</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L997" class="blob-line-num js-line-number" data-line-number="997"></td>
        <td id="LC997" class="blob-line-code js-file-line">                  <span class="nx">embeddedSource</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L998" class="blob-line-num js-line-number" data-line-number="998"></td>
        <td id="LC998" class="blob-line-code js-file-line">                  <span class="nx">langHandlerForExtension</span><span class="p">(</span><span class="nx">lang</span><span class="p">,</span> <span class="nx">embeddedSource</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L999" class="blob-line-num js-line-number" data-line-number="999"></td>
        <td id="LC999" class="blob-line-code js-file-line">                  <span class="nx">decorations</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1000" class="blob-line-num js-line-number" data-line-number="1000"></td>
        <td id="LC1000" class="blob-line-code js-file-line">              <span class="c1">// Decorate the right of the embedded section</span></td>
      </tr>
      <tr>
        <td id="L1001" class="blob-line-num js-line-number" data-line-number="1001"></td>
        <td id="LC1001" class="blob-line-code js-file-line">              <span class="nx">appendDecorations</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1002" class="blob-line-num js-line-number" data-line-number="1002"></td>
        <td id="LC1002" class="blob-line-code js-file-line">                  <span class="nx">basePos</span> <span class="o">+</span> <span class="nx">tokenStart</span> <span class="o">+</span> <span class="nx">embeddedSourceEnd</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1003" class="blob-line-num js-line-number" data-line-number="1003"></td>
        <td id="LC1003" class="blob-line-code js-file-line">                  <span class="nx">token</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">embeddedSourceEnd</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L1004" class="blob-line-num js-line-number" data-line-number="1004"></td>
        <td id="LC1004" class="blob-line-code js-file-line">                  <span class="nx">decorate</span><span class="p">,</span> <span class="nx">decorations</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1005" class="blob-line-num js-line-number" data-line-number="1005"></td>
        <td id="LC1005" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1006" class="blob-line-num js-line-number" data-line-number="1006"></td>
        <td id="LC1006" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1007" class="blob-line-num js-line-number" data-line-number="1007"></td>
        <td id="LC1007" class="blob-line-code js-file-line">          <span class="nx">job</span><span class="p">.</span><span class="nx">decorations</span> <span class="o">=</span> <span class="nx">decorations</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1008" class="blob-line-num js-line-number" data-line-number="1008"></td>
        <td id="LC1008" class="blob-line-code js-file-line">        <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L1009" class="blob-line-num js-line-number" data-line-number="1009"></td>
        <td id="LC1009" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">decorate</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1010" class="blob-line-num js-line-number" data-line-number="1010"></td>
        <td id="LC1010" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1011" class="blob-line-num js-line-number" data-line-number="1011"></td>
        <td id="LC1011" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1012" class="blob-line-num js-line-number" data-line-number="1012"></td>
        <td id="LC1012" class="blob-line-code js-file-line">      <span class="cm">/** returns a function that produces a list of decorations from source text.</span></td>
      </tr>
      <tr>
        <td id="L1013" class="blob-line-num js-line-number" data-line-number="1013"></td>
        <td id="LC1013" class="blob-line-code js-file-line"><span class="cm">        *</span></td>
      </tr>
      <tr>
        <td id="L1014" class="blob-line-num js-line-number" data-line-number="1014"></td>
        <td id="LC1014" class="blob-line-code js-file-line"><span class="cm">        * This code treats &quot;, &#39;, and ` as string delimiters, and \ as a string</span></td>
      </tr>
      <tr>
        <td id="L1015" class="blob-line-num js-line-number" data-line-number="1015"></td>
        <td id="LC1015" class="blob-line-code js-file-line"><span class="cm">        * escape.  It does not recognize perl&#39;s qq() style strings.</span></td>
      </tr>
      <tr>
        <td id="L1016" class="blob-line-num js-line-number" data-line-number="1016"></td>
        <td id="LC1016" class="blob-line-code js-file-line"><span class="cm">        * It has no special handling for double delimiter escapes as in basic, or</span></td>
      </tr>
      <tr>
        <td id="L1017" class="blob-line-num js-line-number" data-line-number="1017"></td>
        <td id="LC1017" class="blob-line-code js-file-line"><span class="cm">        * the tripled delimiters used in python, but should work on those regardless</span></td>
      </tr>
      <tr>
        <td id="L1018" class="blob-line-num js-line-number" data-line-number="1018"></td>
        <td id="LC1018" class="blob-line-code js-file-line"><span class="cm">        * although in those cases a single string literal may be broken up into</span></td>
      </tr>
      <tr>
        <td id="L1019" class="blob-line-num js-line-number" data-line-number="1019"></td>
        <td id="LC1019" class="blob-line-code js-file-line"><span class="cm">        * multiple adjacent string literals.</span></td>
      </tr>
      <tr>
        <td id="L1020" class="blob-line-num js-line-number" data-line-number="1020"></td>
        <td id="LC1020" class="blob-line-code js-file-line"><span class="cm">        *</span></td>
      </tr>
      <tr>
        <td id="L1021" class="blob-line-num js-line-number" data-line-number="1021"></td>
        <td id="LC1021" class="blob-line-code js-file-line"><span class="cm">        * It recognizes C, C++, and shell style comments.</span></td>
      </tr>
      <tr>
        <td id="L1022" class="blob-line-num js-line-number" data-line-number="1022"></td>
        <td id="LC1022" class="blob-line-code js-file-line"><span class="cm">        *</span></td>
      </tr>
      <tr>
        <td id="L1023" class="blob-line-num js-line-number" data-line-number="1023"></td>
        <td id="LC1023" class="blob-line-code js-file-line"><span class="cm">        * @param {Object} options a set of optional parameters.</span></td>
      </tr>
      <tr>
        <td id="L1024" class="blob-line-num js-line-number" data-line-number="1024"></td>
        <td id="LC1024" class="blob-line-code js-file-line"><span class="cm">        * @return {function (Object)} a function that examines the source code</span></td>
      </tr>
      <tr>
        <td id="L1025" class="blob-line-num js-line-number" data-line-number="1025"></td>
        <td id="LC1025" class="blob-line-code js-file-line"><span class="cm">        *     in the input job and builds the decoration list.</span></td>
      </tr>
      <tr>
        <td id="L1026" class="blob-line-num js-line-number" data-line-number="1026"></td>
        <td id="LC1026" class="blob-line-code js-file-line"><span class="cm">        */</span></td>
      </tr>
      <tr>
        <td id="L1027" class="blob-line-num js-line-number" data-line-number="1027"></td>
        <td id="LC1027" class="blob-line-code js-file-line">      <span class="kd">function</span> <span class="nx">sourceDecorator</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1028" class="blob-line-num js-line-number" data-line-number="1028"></td>
        <td id="LC1028" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">shortcutStylePatterns</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">fallthroughStylePatterns</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L1029" class="blob-line-num js-line-number" data-line-number="1029"></td>
        <td id="LC1029" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">[</span><span class="s1">&#39;tripleQuotedStrings&#39;</span><span class="p">])</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1030" class="blob-line-num js-line-number" data-line-number="1030"></td>
        <td id="LC1030" class="blob-line-code js-file-line">          <span class="c1">// &#39;&#39;&#39;multi-line-string&#39;&#39;&#39;, &#39;single-line-string&#39;, and double-quoted</span></td>
      </tr>
      <tr>
        <td id="L1031" class="blob-line-num js-line-number" data-line-number="1031"></td>
        <td id="LC1031" class="blob-line-code js-file-line">          <span class="nx">shortcutStylePatterns</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1032" class="blob-line-num js-line-number" data-line-number="1032"></td>
        <td id="LC1032" class="blob-line-code js-file-line">              <span class="p">[</span><span class="nx">PR_STRING</span><span class="p">,</span>  <span class="sr">/^(?:\&#39;\&#39;\&#39;(?:[^\&#39;\\]|\\[\s\S]|\&#39;{1,2}(?=[^\&#39;]))*(?:\&#39;\&#39;\&#39;|$)|\&quot;\&quot;\&quot;(?:[^\&quot;\\]|\\[\s\S]|\&quot;{1,2}(?=[^\&quot;]))*(?:\&quot;\&quot;\&quot;|$)|\&#39;(?:[^\\\&#39;]|\\[\s\S])*(?:\&#39;|$)|\&quot;(?:[^\\\&quot;]|\\[\s\S])*(?:\&quot;|$))/</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1033" class="blob-line-num js-line-number" data-line-number="1033"></td>
        <td id="LC1033" class="blob-line-code js-file-line">               <span class="kc">null</span><span class="p">,</span> <span class="s1">&#39;\&#39;&quot;&#39;</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1034" class="blob-line-num js-line-number" data-line-number="1034"></td>
        <td id="LC1034" class="blob-line-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">[</span><span class="s1">&#39;multiLineStrings&#39;</span><span class="p">])</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1035" class="blob-line-num js-line-number" data-line-number="1035"></td>
        <td id="LC1035" class="blob-line-code js-file-line">          <span class="c1">// &#39;multi-line-string&#39;, &quot;multi-line-string&quot;</span></td>
      </tr>
      <tr>
        <td id="L1036" class="blob-line-num js-line-number" data-line-number="1036"></td>
        <td id="LC1036" class="blob-line-code js-file-line">          <span class="nx">shortcutStylePatterns</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1037" class="blob-line-num js-line-number" data-line-number="1037"></td>
        <td id="LC1037" class="blob-line-code js-file-line">              <span class="p">[</span><span class="nx">PR_STRING</span><span class="p">,</span>  <span class="sr">/^(?:\&#39;(?:[^\\\&#39;]|\\[\s\S])*(?:\&#39;|$)|\&quot;(?:[^\\\&quot;]|\\[\s\S])*(?:\&quot;|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1038" class="blob-line-num js-line-number" data-line-number="1038"></td>
        <td id="LC1038" class="blob-line-code js-file-line">               <span class="kc">null</span><span class="p">,</span> <span class="s1">&#39;\&#39;&quot;`&#39;</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1039" class="blob-line-num js-line-number" data-line-number="1039"></td>
        <td id="LC1039" class="blob-line-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1040" class="blob-line-num js-line-number" data-line-number="1040"></td>
        <td id="LC1040" class="blob-line-code js-file-line">          <span class="c1">// &#39;single-line-string&#39;, &quot;single-line-string&quot;</span></td>
      </tr>
      <tr>
        <td id="L1041" class="blob-line-num js-line-number" data-line-number="1041"></td>
        <td id="LC1041" class="blob-line-code js-file-line">          <span class="nx">shortcutStylePatterns</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1042" class="blob-line-num js-line-number" data-line-number="1042"></td>
        <td id="LC1042" class="blob-line-code js-file-line">              <span class="p">[</span><span class="nx">PR_STRING</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1043" class="blob-line-num js-line-number" data-line-number="1043"></td>
        <td id="LC1043" class="blob-line-code js-file-line">               <span class="sr">/^(?:\&#39;(?:[^\\\&#39;\r\n]|\\.)*(?:\&#39;|$)|\&quot;(?:[^\\\&quot;\r\n]|\\.)*(?:\&quot;|$))/</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1044" class="blob-line-num js-line-number" data-line-number="1044"></td>
        <td id="LC1044" class="blob-line-code js-file-line">               <span class="kc">null</span><span class="p">,</span> <span class="s1">&#39;&quot;\&#39;&#39;</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1045" class="blob-line-num js-line-number" data-line-number="1045"></td>
        <td id="LC1045" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1046" class="blob-line-num js-line-number" data-line-number="1046"></td>
        <td id="LC1046" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">[</span><span class="s1">&#39;verbatimStrings&#39;</span><span class="p">])</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1047" class="blob-line-num js-line-number" data-line-number="1047"></td>
        <td id="LC1047" class="blob-line-code js-file-line">          <span class="c1">// verbatim-string-literal production from the C# grammar.  See issue 93.</span></td>
      </tr>
      <tr>
        <td id="L1048" class="blob-line-num js-line-number" data-line-number="1048"></td>
        <td id="LC1048" class="blob-line-code js-file-line">          <span class="nx">fallthroughStylePatterns</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1049" class="blob-line-num js-line-number" data-line-number="1049"></td>
        <td id="LC1049" class="blob-line-code js-file-line">              <span class="p">[</span><span class="nx">PR_STRING</span><span class="p">,</span> <span class="sr">/^@\&quot;(?:[^\&quot;]|\&quot;\&quot;)*(?:\&quot;|$)/</span><span class="p">,</span> <span class="kc">null</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1050" class="blob-line-num js-line-number" data-line-number="1050"></td>
        <td id="LC1050" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1051" class="blob-line-num js-line-number" data-line-number="1051"></td>
        <td id="LC1051" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">hc</span> <span class="o">=</span> <span class="nx">options</span><span class="p">[</span><span class="s1">&#39;hashComments&#39;</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L1052" class="blob-line-num js-line-number" data-line-number="1052"></td>
        <td id="LC1052" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">hc</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1053" class="blob-line-num js-line-number" data-line-number="1053"></td>
        <td id="LC1053" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">[</span><span class="s1">&#39;cStyleComments&#39;</span><span class="p">])</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1054" class="blob-line-num js-line-number" data-line-number="1054"></td>
        <td id="LC1054" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">hc</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span>  <span class="c1">// multiline hash comments</span></td>
      </tr>
      <tr>
        <td id="L1055" class="blob-line-num js-line-number" data-line-number="1055"></td>
        <td id="LC1055" class="blob-line-code js-file-line">              <span class="nx">shortcutStylePatterns</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1056" class="blob-line-num js-line-number" data-line-number="1056"></td>
        <td id="LC1056" class="blob-line-code js-file-line">                  <span class="p">[</span><span class="nx">PR_COMMENT</span><span class="p">,</span> <span class="sr">/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="s1">&#39;#&#39;</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1057" class="blob-line-num js-line-number" data-line-number="1057"></td>
        <td id="LC1057" class="blob-line-code js-file-line">            <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1058" class="blob-line-num js-line-number" data-line-number="1058"></td>
        <td id="LC1058" class="blob-line-code js-file-line">              <span class="c1">// Stop C preprocessor declarations at an unclosed open comment</span></td>
      </tr>
      <tr>
        <td id="L1059" class="blob-line-num js-line-number" data-line-number="1059"></td>
        <td id="LC1059" class="blob-line-code js-file-line">              <span class="nx">shortcutStylePatterns</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1060" class="blob-line-num js-line-number" data-line-number="1060"></td>
        <td id="LC1060" class="blob-line-code js-file-line">                  <span class="p">[</span><span class="nx">PR_COMMENT</span><span class="p">,</span> <span class="sr">/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1061" class="blob-line-num js-line-number" data-line-number="1061"></td>
        <td id="LC1061" class="blob-line-code js-file-line">                   <span class="kc">null</span><span class="p">,</span> <span class="s1">&#39;#&#39;</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1062" class="blob-line-num js-line-number" data-line-number="1062"></td>
        <td id="LC1062" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1063" class="blob-line-num js-line-number" data-line-number="1063"></td>
        <td id="LC1063" class="blob-line-code js-file-line">            <span class="c1">// #include &lt;stdio.h&gt;</span></td>
      </tr>
      <tr>
        <td id="L1064" class="blob-line-num js-line-number" data-line-number="1064"></td>
        <td id="LC1064" class="blob-line-code js-file-line">            <span class="nx">fallthroughStylePatterns</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1065" class="blob-line-num js-line-number" data-line-number="1065"></td>
        <td id="LC1065" class="blob-line-code js-file-line">                <span class="p">[</span><span class="nx">PR_STRING</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1066" class="blob-line-num js-line-number" data-line-number="1066"></td>
        <td id="LC1066" class="blob-line-code js-file-line">                 <span class="sr">/^&lt;(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)&gt;/</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1067" class="blob-line-num js-line-number" data-line-number="1067"></td>
        <td id="LC1067" class="blob-line-code js-file-line">                 <span class="kc">null</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1068" class="blob-line-num js-line-number" data-line-number="1068"></td>
        <td id="LC1068" class="blob-line-code js-file-line">          <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1069" class="blob-line-num js-line-number" data-line-number="1069"></td>
        <td id="LC1069" class="blob-line-code js-file-line">            <span class="nx">shortcutStylePatterns</span><span class="p">.</span><span class="nx">push</span><span class="p">([</span><span class="nx">PR_COMMENT</span><span class="p">,</span> <span class="sr">/^#[^\r\n]*/</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="s1">&#39;#&#39;</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1070" class="blob-line-num js-line-number" data-line-number="1070"></td>
        <td id="LC1070" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1071" class="blob-line-num js-line-number" data-line-number="1071"></td>
        <td id="LC1071" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1072" class="blob-line-num js-line-number" data-line-number="1072"></td>
        <td id="LC1072" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">[</span><span class="s1">&#39;cStyleComments&#39;</span><span class="p">])</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1073" class="blob-line-num js-line-number" data-line-number="1073"></td>
        <td id="LC1073" class="blob-line-code js-file-line">          <span class="nx">fallthroughStylePatterns</span><span class="p">.</span><span class="nx">push</span><span class="p">([</span><span class="nx">PR_COMMENT</span><span class="p">,</span> <span class="sr">/^\/\/[^\r\n]*/</span><span class="p">,</span> <span class="kc">null</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1074" class="blob-line-num js-line-number" data-line-number="1074"></td>
        <td id="LC1074" class="blob-line-code js-file-line">          <span class="nx">fallthroughStylePatterns</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1075" class="blob-line-num js-line-number" data-line-number="1075"></td>
        <td id="LC1075" class="blob-line-code js-file-line">              <span class="p">[</span><span class="nx">PR_COMMENT</span><span class="p">,</span> <span class="sr">/^\/\*[\s\S]*?(?:\*\/|$)/</span><span class="p">,</span> <span class="kc">null</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1076" class="blob-line-num js-line-number" data-line-number="1076"></td>
        <td id="LC1076" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1077" class="blob-line-num js-line-number" data-line-number="1077"></td>
        <td id="LC1077" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">regexLiterals</span> <span class="o">=</span> <span class="nx">options</span><span class="p">[</span><span class="s1">&#39;regexLiterals&#39;</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L1078" class="blob-line-num js-line-number" data-line-number="1078"></td>
        <td id="LC1078" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">regexLiterals</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1079" class="blob-line-num js-line-number" data-line-number="1079"></td>
        <td id="LC1079" class="blob-line-code js-file-line">          <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L1080" class="blob-line-num js-line-number" data-line-number="1080"></td>
        <td id="LC1080" class="blob-line-code js-file-line"><span class="cm">           * @const</span></td>
      </tr>
      <tr>
        <td id="L1081" class="blob-line-num js-line-number" data-line-number="1081"></td>
        <td id="LC1081" class="blob-line-code js-file-line"><span class="cm">           */</span></td>
      </tr>
      <tr>
        <td id="L1082" class="blob-line-num js-line-number" data-line-number="1082"></td>
        <td id="LC1082" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">regexExcls</span> <span class="o">=</span> <span class="nx">regexLiterals</span> <span class="o">&gt;</span> <span class="mi">1</span></td>
      </tr>
      <tr>
        <td id="L1083" class="blob-line-num js-line-number" data-line-number="1083"></td>
        <td id="LC1083" class="blob-line-code js-file-line">            <span class="o">?</span> <span class="s1">&#39;&#39;</span>  <span class="c1">// Multiline regex literals</span></td>
      </tr>
      <tr>
        <td id="L1084" class="blob-line-num js-line-number" data-line-number="1084"></td>
        <td id="LC1084" class="blob-line-code js-file-line">            <span class="o">:</span> <span class="s1">&#39;\n\r&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1085" class="blob-line-num js-line-number" data-line-number="1085"></td>
        <td id="LC1085" class="blob-line-code js-file-line">          <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L1086" class="blob-line-num js-line-number" data-line-number="1086"></td>
        <td id="LC1086" class="blob-line-code js-file-line"><span class="cm">           * @const</span></td>
      </tr>
      <tr>
        <td id="L1087" class="blob-line-num js-line-number" data-line-number="1087"></td>
        <td id="LC1087" class="blob-line-code js-file-line"><span class="cm">           */</span></td>
      </tr>
      <tr>
        <td id="L1088" class="blob-line-num js-line-number" data-line-number="1088"></td>
        <td id="LC1088" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">regexAny</span> <span class="o">=</span> <span class="nx">regexExcls</span> <span class="o">?</span> <span class="s1">&#39;.&#39;</span> <span class="o">:</span> <span class="s1">&#39;[\\S\\s]&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1089" class="blob-line-num js-line-number" data-line-number="1089"></td>
        <td id="LC1089" class="blob-line-code js-file-line">          <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L1090" class="blob-line-num js-line-number" data-line-number="1090"></td>
        <td id="LC1090" class="blob-line-code js-file-line"><span class="cm">           * @const</span></td>
      </tr>
      <tr>
        <td id="L1091" class="blob-line-num js-line-number" data-line-number="1091"></td>
        <td id="LC1091" class="blob-line-code js-file-line"><span class="cm">           */</span></td>
      </tr>
      <tr>
        <td id="L1092" class="blob-line-num js-line-number" data-line-number="1092"></td>
        <td id="LC1092" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">REGEX_LITERAL</span> <span class="o">=</span> <span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1093" class="blob-line-num js-line-number" data-line-number="1093"></td>
        <td id="LC1093" class="blob-line-code js-file-line">              <span class="c1">// A regular expression literal starts with a slash that is</span></td>
      </tr>
      <tr>
        <td id="L1094" class="blob-line-num js-line-number" data-line-number="1094"></td>
        <td id="LC1094" class="blob-line-code js-file-line">              <span class="c1">// not followed by * or / so that it is not confused with</span></td>
      </tr>
      <tr>
        <td id="L1095" class="blob-line-num js-line-number" data-line-number="1095"></td>
        <td id="LC1095" class="blob-line-code js-file-line">              <span class="c1">// comments.</span></td>
      </tr>
      <tr>
        <td id="L1096" class="blob-line-num js-line-number" data-line-number="1096"></td>
        <td id="LC1096" class="blob-line-code js-file-line">              <span class="s1">&#39;/(?=[^/*&#39;</span> <span class="o">+</span> <span class="nx">regexExcls</span> <span class="o">+</span> <span class="s1">&#39;])&#39;</span></td>
      </tr>
      <tr>
        <td id="L1097" class="blob-line-num js-line-number" data-line-number="1097"></td>
        <td id="LC1097" class="blob-line-code js-file-line">              <span class="c1">// and then contains any number of raw characters,</span></td>
      </tr>
      <tr>
        <td id="L1098" class="blob-line-num js-line-number" data-line-number="1098"></td>
        <td id="LC1098" class="blob-line-code js-file-line">              <span class="o">+</span> <span class="s1">&#39;(?:[^/\\x5B\\x5C&#39;</span> <span class="o">+</span> <span class="nx">regexExcls</span> <span class="o">+</span> <span class="s1">&#39;]&#39;</span></td>
      </tr>
      <tr>
        <td id="L1099" class="blob-line-num js-line-number" data-line-number="1099"></td>
        <td id="LC1099" class="blob-line-code js-file-line">              <span class="c1">// escape sequences (\x5C),</span></td>
      </tr>
      <tr>
        <td id="L1100" class="blob-line-num js-line-number" data-line-number="1100"></td>
        <td id="LC1100" class="blob-line-code js-file-line">              <span class="o">+</span>    <span class="s1">&#39;|\\x5C&#39;</span> <span class="o">+</span> <span class="nx">regexAny</span></td>
      </tr>
      <tr>
        <td id="L1101" class="blob-line-num js-line-number" data-line-number="1101"></td>
        <td id="LC1101" class="blob-line-code js-file-line">              <span class="c1">// or non-nesting character sets (\x5B\x5D);</span></td>
      </tr>
      <tr>
        <td id="L1102" class="blob-line-num js-line-number" data-line-number="1102"></td>
        <td id="LC1102" class="blob-line-code js-file-line">              <span class="o">+</span>    <span class="s1">&#39;|\\x5B(?:[^\\x5C\\x5D&#39;</span> <span class="o">+</span> <span class="nx">regexExcls</span> <span class="o">+</span> <span class="s1">&#39;]&#39;</span></td>
      </tr>
      <tr>
        <td id="L1103" class="blob-line-num js-line-number" data-line-number="1103"></td>
        <td id="LC1103" class="blob-line-code js-file-line">              <span class="o">+</span>             <span class="s1">&#39;|\\x5C&#39;</span> <span class="o">+</span> <span class="nx">regexAny</span> <span class="o">+</span> <span class="s1">&#39;)*(?:\\x5D|$))+&#39;</span></td>
      </tr>
      <tr>
        <td id="L1104" class="blob-line-num js-line-number" data-line-number="1104"></td>
        <td id="LC1104" class="blob-line-code js-file-line">              <span class="c1">// finally closed by a /.</span></td>
      </tr>
      <tr>
        <td id="L1105" class="blob-line-num js-line-number" data-line-number="1105"></td>
        <td id="LC1105" class="blob-line-code js-file-line">              <span class="o">+</span> <span class="s1">&#39;/&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1106" class="blob-line-num js-line-number" data-line-number="1106"></td>
        <td id="LC1106" class="blob-line-code js-file-line">          <span class="nx">fallthroughStylePatterns</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1107" class="blob-line-num js-line-number" data-line-number="1107"></td>
        <td id="LC1107" class="blob-line-code js-file-line">              <span class="p">[</span><span class="s1">&#39;lang-regex&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1108" class="blob-line-num js-line-number" data-line-number="1108"></td>
        <td id="LC1108" class="blob-line-code js-file-line">               <span class="nb">RegExp</span><span class="p">(</span><span class="s1">&#39;^&#39;</span> <span class="o">+</span> <span class="nx">REGEXP_PRECEDER_PATTERN</span> <span class="o">+</span> <span class="s1">&#39;(&#39;</span> <span class="o">+</span> <span class="nx">REGEX_LITERAL</span> <span class="o">+</span> <span class="s1">&#39;)&#39;</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L1109" class="blob-line-num js-line-number" data-line-number="1109"></td>
        <td id="LC1109" class="blob-line-code js-file-line">               <span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1110" class="blob-line-num js-line-number" data-line-number="1110"></td>
        <td id="LC1110" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1111" class="blob-line-num js-line-number" data-line-number="1111"></td>
        <td id="LC1111" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1112" class="blob-line-num js-line-number" data-line-number="1112"></td>
        <td id="LC1112" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">types</span> <span class="o">=</span> <span class="nx">options</span><span class="p">[</span><span class="s1">&#39;types&#39;</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L1113" class="blob-line-num js-line-number" data-line-number="1113"></td>
        <td id="LC1113" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">types</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1114" class="blob-line-num js-line-number" data-line-number="1114"></td>
        <td id="LC1114" class="blob-line-code js-file-line">          <span class="nx">fallthroughStylePatterns</span><span class="p">.</span><span class="nx">push</span><span class="p">([</span><span class="nx">PR_TYPE</span><span class="p">,</span> <span class="nx">types</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1115" class="blob-line-num js-line-number" data-line-number="1115"></td>
        <td id="LC1115" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1116" class="blob-line-num js-line-number" data-line-number="1116"></td>
        <td id="LC1116" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1117" class="blob-line-num js-line-number" data-line-number="1117"></td>
        <td id="LC1117" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">keywords</span> <span class="o">=</span> <span class="p">(</span><span class="s2">&quot;&quot;</span> <span class="o">+</span> <span class="nx">options</span><span class="p">[</span><span class="s1">&#39;keywords&#39;</span><span class="p">]).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^ | $/g</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1118" class="blob-line-num js-line-number" data-line-number="1118"></td>
        <td id="LC1118" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">keywords</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1119" class="blob-line-num js-line-number" data-line-number="1119"></td>
        <td id="LC1119" class="blob-line-code js-file-line">          <span class="nx">fallthroughStylePatterns</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1120" class="blob-line-num js-line-number" data-line-number="1120"></td>
        <td id="LC1120" class="blob-line-code js-file-line">              <span class="p">[</span><span class="nx">PR_KEYWORD</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1121" class="blob-line-num js-line-number" data-line-number="1121"></td>
        <td id="LC1121" class="blob-line-code js-file-line">               <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s1">&#39;^(?:&#39;</span> <span class="o">+</span> <span class="nx">keywords</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[\s,]+/g</span><span class="p">,</span> <span class="s1">&#39;|&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;)\\b&#39;</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L1122" class="blob-line-num js-line-number" data-line-number="1122"></td>
        <td id="LC1122" class="blob-line-code js-file-line">               <span class="kc">null</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1123" class="blob-line-num js-line-number" data-line-number="1123"></td>
        <td id="LC1123" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1124" class="blob-line-num js-line-number" data-line-number="1124"></td>
        <td id="LC1124" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1125" class="blob-line-num js-line-number" data-line-number="1125"></td>
        <td id="LC1125" class="blob-line-code js-file-line">        <span class="nx">shortcutStylePatterns</span><span class="p">.</span><span class="nx">push</span><span class="p">([</span><span class="nx">PR_PLAIN</span><span class="p">,</span>       <span class="sr">/^\s+/</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="s1">&#39; \r\n\t\xA0&#39;</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1126" class="blob-line-num js-line-number" data-line-number="1126"></td>
        <td id="LC1126" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1127" class="blob-line-num js-line-number" data-line-number="1127"></td>
        <td id="LC1127" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">punctuation</span> <span class="o">=</span></td>
      </tr>
      <tr>
        <td id="L1128" class="blob-line-num js-line-number" data-line-number="1128"></td>
        <td id="LC1128" class="blob-line-code js-file-line">          <span class="c1">// The Bash man page says</span></td>
      </tr>
      <tr>
        <td id="L1129" class="blob-line-num js-line-number" data-line-number="1129"></td>
        <td id="LC1129" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1130" class="blob-line-num js-line-number" data-line-number="1130"></td>
        <td id="LC1130" class="blob-line-code js-file-line">          <span class="c1">// A word is a sequence of characters considered as a single</span></td>
      </tr>
      <tr>
        <td id="L1131" class="blob-line-num js-line-number" data-line-number="1131"></td>
        <td id="LC1131" class="blob-line-code js-file-line">          <span class="c1">// unit by GRUB. Words are separated by metacharacters,</span></td>
      </tr>
      <tr>
        <td id="L1132" class="blob-line-num js-line-number" data-line-number="1132"></td>
        <td id="LC1132" class="blob-line-code js-file-line">          <span class="c1">// which are the following plus space, tab, and newline: { }</span></td>
      </tr>
      <tr>
        <td id="L1133" class="blob-line-num js-line-number" data-line-number="1133"></td>
        <td id="LC1133" class="blob-line-code js-file-line">          <span class="c1">// | &amp; $ ; &lt; &gt;</span></td>
      </tr>
      <tr>
        <td id="L1134" class="blob-line-num js-line-number" data-line-number="1134"></td>
        <td id="LC1134" class="blob-line-code js-file-line">          <span class="c1">// ...</span></td>
      </tr>
      <tr>
        <td id="L1135" class="blob-line-num js-line-number" data-line-number="1135"></td>
        <td id="LC1135" class="blob-line-code js-file-line">          </td>
      </tr>
      <tr>
        <td id="L1136" class="blob-line-num js-line-number" data-line-number="1136"></td>
        <td id="LC1136" class="blob-line-code js-file-line">          <span class="c1">// A word beginning with # causes that word and all remaining</span></td>
      </tr>
      <tr>
        <td id="L1137" class="blob-line-num js-line-number" data-line-number="1137"></td>
        <td id="LC1137" class="blob-line-code js-file-line">          <span class="c1">// characters on that line to be ignored.</span></td>
      </tr>
      <tr>
        <td id="L1138" class="blob-line-num js-line-number" data-line-number="1138"></td>
        <td id="LC1138" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1139" class="blob-line-num js-line-number" data-line-number="1139"></td>
        <td id="LC1139" class="blob-line-code js-file-line">          <span class="c1">// which means that only a &#39;#&#39; after /(?:^|[{}|&amp;$;&lt;&gt;\s])/ starts a</span></td>
      </tr>
      <tr>
        <td id="L1140" class="blob-line-num js-line-number" data-line-number="1140"></td>
        <td id="LC1140" class="blob-line-code js-file-line">          <span class="c1">// comment but empirically</span></td>
      </tr>
      <tr>
        <td id="L1141" class="blob-line-num js-line-number" data-line-number="1141"></td>
        <td id="LC1141" class="blob-line-code js-file-line">          <span class="c1">// $ echo {#}</span></td>
      </tr>
      <tr>
        <td id="L1142" class="blob-line-num js-line-number" data-line-number="1142"></td>
        <td id="LC1142" class="blob-line-code js-file-line">          <span class="c1">// {#}</span></td>
      </tr>
      <tr>
        <td id="L1143" class="blob-line-num js-line-number" data-line-number="1143"></td>
        <td id="LC1143" class="blob-line-code js-file-line">          <span class="c1">// $ echo \$#</span></td>
      </tr>
      <tr>
        <td id="L1144" class="blob-line-num js-line-number" data-line-number="1144"></td>
        <td id="LC1144" class="blob-line-code js-file-line">          <span class="c1">// $#</span></td>
      </tr>
      <tr>
        <td id="L1145" class="blob-line-num js-line-number" data-line-number="1145"></td>
        <td id="LC1145" class="blob-line-code js-file-line">          <span class="c1">// $ echo }#</span></td>
      </tr>
      <tr>
        <td id="L1146" class="blob-line-num js-line-number" data-line-number="1146"></td>
        <td id="LC1146" class="blob-line-code js-file-line">          <span class="c1">// }#</span></td>
      </tr>
      <tr>
        <td id="L1147" class="blob-line-num js-line-number" data-line-number="1147"></td>
        <td id="LC1147" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1148" class="blob-line-num js-line-number" data-line-number="1148"></td>
        <td id="LC1148" class="blob-line-code js-file-line">          <span class="c1">// so /(?:^|[|&amp;;&lt;&gt;\s])/ is more appropriate.</span></td>
      </tr>
      <tr>
        <td id="L1149" class="blob-line-num js-line-number" data-line-number="1149"></td>
        <td id="LC1149" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1150" class="blob-line-num js-line-number" data-line-number="1150"></td>
        <td id="LC1150" class="blob-line-code js-file-line">          <span class="c1">// http://gcc.gnu.org/onlinedocs/gcc-2.95.3/cpp_1.html#SEC3</span></td>
      </tr>
      <tr>
        <td id="L1151" class="blob-line-num js-line-number" data-line-number="1151"></td>
        <td id="LC1151" class="blob-line-code js-file-line">          <span class="c1">// suggests that this definition is compatible with a</span></td>
      </tr>
      <tr>
        <td id="L1152" class="blob-line-num js-line-number" data-line-number="1152"></td>
        <td id="LC1152" class="blob-line-code js-file-line">          <span class="c1">// default mode that tries to use a single token definition</span></td>
      </tr>
      <tr>
        <td id="L1153" class="blob-line-num js-line-number" data-line-number="1153"></td>
        <td id="LC1153" class="blob-line-code js-file-line">          <span class="c1">// to recognize both bash/python style comments and C</span></td>
      </tr>
      <tr>
        <td id="L1154" class="blob-line-num js-line-number" data-line-number="1154"></td>
        <td id="LC1154" class="blob-line-code js-file-line">          <span class="c1">// preprocessor directives.</span></td>
      </tr>
      <tr>
        <td id="L1155" class="blob-line-num js-line-number" data-line-number="1155"></td>
        <td id="LC1155" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1156" class="blob-line-num js-line-number" data-line-number="1156"></td>
        <td id="LC1156" class="blob-line-code js-file-line">          <span class="c1">// This definition of punctuation does not include # in the list of</span></td>
      </tr>
      <tr>
        <td id="L1157" class="blob-line-num js-line-number" data-line-number="1157"></td>
        <td id="LC1157" class="blob-line-code js-file-line">          <span class="c1">// follow-on exclusions, so # will not be broken before if preceeded</span></td>
      </tr>
      <tr>
        <td id="L1158" class="blob-line-num js-line-number" data-line-number="1158"></td>
        <td id="LC1158" class="blob-line-code js-file-line">          <span class="c1">// by a punctuation character.  We could try to exclude # after</span></td>
      </tr>
      <tr>
        <td id="L1159" class="blob-line-num js-line-number" data-line-number="1159"></td>
        <td id="LC1159" class="blob-line-code js-file-line">          <span class="c1">// [|&amp;;&lt;&gt;] but that doesn&#39;t seem to cause many major problems.</span></td>
      </tr>
      <tr>
        <td id="L1160" class="blob-line-num js-line-number" data-line-number="1160"></td>
        <td id="LC1160" class="blob-line-code js-file-line">          <span class="c1">// If that does turn out to be a problem, we should change the below</span></td>
      </tr>
      <tr>
        <td id="L1161" class="blob-line-num js-line-number" data-line-number="1161"></td>
        <td id="LC1161" class="blob-line-code js-file-line">          <span class="c1">// when hc is truthy to include # in the run of punctuation characters</span></td>
      </tr>
      <tr>
        <td id="L1162" class="blob-line-num js-line-number" data-line-number="1162"></td>
        <td id="LC1162" class="blob-line-code js-file-line">          <span class="c1">// only when not followint [|&amp;;&lt;&gt;].</span></td>
      </tr>
      <tr>
        <td id="L1163" class="blob-line-num js-line-number" data-line-number="1163"></td>
        <td id="LC1163" class="blob-line-code js-file-line">          <span class="s1">&#39;^.[^\\s\\w.$@\&#39;&quot;`/\\\\]*&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1164" class="blob-line-num js-line-number" data-line-number="1164"></td>
        <td id="LC1164" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">[</span><span class="s1">&#39;regexLiterals&#39;</span><span class="p">])</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1165" class="blob-line-num js-line-number" data-line-number="1165"></td>
        <td id="LC1165" class="blob-line-code js-file-line">          <span class="nx">punctuation</span> <span class="o">+=</span> <span class="s1">&#39;(?!\s*\/)&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1166" class="blob-line-num js-line-number" data-line-number="1166"></td>
        <td id="LC1166" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1167" class="blob-line-num js-line-number" data-line-number="1167"></td>
        <td id="LC1167" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1168" class="blob-line-num js-line-number" data-line-number="1168"></td>
        <td id="LC1168" class="blob-line-code js-file-line">        <span class="nx">fallthroughStylePatterns</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1169" class="blob-line-num js-line-number" data-line-number="1169"></td>
        <td id="LC1169" class="blob-line-code js-file-line">            <span class="c1">// TODO(mikesamuel): recognize non-latin letters and numerals in idents</span></td>
      </tr>
      <tr>
        <td id="L1170" class="blob-line-num js-line-number" data-line-number="1170"></td>
        <td id="LC1170" class="blob-line-code js-file-line">            <span class="p">[</span><span class="nx">PR_LITERAL</span><span class="p">,</span>     <span class="sr">/^@[a-z_$][a-z_$@0-9]*/i</span><span class="p">,</span> <span class="kc">null</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1171" class="blob-line-num js-line-number" data-line-number="1171"></td>
        <td id="LC1171" class="blob-line-code js-file-line">            <span class="p">[</span><span class="nx">PR_TYPE</span><span class="p">,</span>        <span class="sr">/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/</span><span class="p">,</span> <span class="kc">null</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1172" class="blob-line-num js-line-number" data-line-number="1172"></td>
        <td id="LC1172" class="blob-line-code js-file-line">            <span class="p">[</span><span class="nx">PR_PLAIN</span><span class="p">,</span>       <span class="sr">/^[a-z_$][a-z_$@0-9]*/i</span><span class="p">,</span> <span class="kc">null</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1173" class="blob-line-num js-line-number" data-line-number="1173"></td>
        <td id="LC1173" class="blob-line-code js-file-line">            <span class="p">[</span><span class="nx">PR_LITERAL</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1174" class="blob-line-num js-line-number" data-line-number="1174"></td>
        <td id="LC1174" class="blob-line-code js-file-line">             <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1175" class="blob-line-num js-line-number" data-line-number="1175"></td>
        <td id="LC1175" class="blob-line-code js-file-line">                 <span class="s1">&#39;^(?:&#39;</span></td>
      </tr>
      <tr>
        <td id="L1176" class="blob-line-num js-line-number" data-line-number="1176"></td>
        <td id="LC1176" class="blob-line-code js-file-line">                 <span class="c1">// A hex number</span></td>
      </tr>
      <tr>
        <td id="L1177" class="blob-line-num js-line-number" data-line-number="1177"></td>
        <td id="LC1177" class="blob-line-code js-file-line">                 <span class="o">+</span> <span class="s1">&#39;0x[a-f0-9]+&#39;</span></td>
      </tr>
      <tr>
        <td id="L1178" class="blob-line-num js-line-number" data-line-number="1178"></td>
        <td id="LC1178" class="blob-line-code js-file-line">                 <span class="c1">// or an octal or decimal number,</span></td>
      </tr>
      <tr>
        <td id="L1179" class="blob-line-num js-line-number" data-line-number="1179"></td>
        <td id="LC1179" class="blob-line-code js-file-line">                 <span class="o">+</span> <span class="s1">&#39;|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)&#39;</span></td>
      </tr>
      <tr>
        <td id="L1180" class="blob-line-num js-line-number" data-line-number="1180"></td>
        <td id="LC1180" class="blob-line-code js-file-line">                 <span class="c1">// possibly in scientific notation</span></td>
      </tr>
      <tr>
        <td id="L1181" class="blob-line-num js-line-number" data-line-number="1181"></td>
        <td id="LC1181" class="blob-line-code js-file-line">                 <span class="o">+</span> <span class="s1">&#39;(?:e[+\\-]?\\d+)?&#39;</span></td>
      </tr>
      <tr>
        <td id="L1182" class="blob-line-num js-line-number" data-line-number="1182"></td>
        <td id="LC1182" class="blob-line-code js-file-line">                 <span class="o">+</span> <span class="s1">&#39;)&#39;</span></td>
      </tr>
      <tr>
        <td id="L1183" class="blob-line-num js-line-number" data-line-number="1183"></td>
        <td id="LC1183" class="blob-line-code js-file-line">                 <span class="c1">// with an optional modifier like UL for unsigned long</span></td>
      </tr>
      <tr>
        <td id="L1184" class="blob-line-num js-line-number" data-line-number="1184"></td>
        <td id="LC1184" class="blob-line-code js-file-line">                 <span class="o">+</span> <span class="s1">&#39;[a-z]*&#39;</span><span class="p">,</span> <span class="s1">&#39;i&#39;</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L1185" class="blob-line-num js-line-number" data-line-number="1185"></td>
        <td id="LC1185" class="blob-line-code js-file-line">             <span class="kc">null</span><span class="p">,</span> <span class="s1">&#39;0123456789&#39;</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1186" class="blob-line-num js-line-number" data-line-number="1186"></td>
        <td id="LC1186" class="blob-line-code js-file-line">            <span class="c1">// Don&#39;t treat escaped quotes in bash as starting strings.</span></td>
      </tr>
      <tr>
        <td id="L1187" class="blob-line-num js-line-number" data-line-number="1187"></td>
        <td id="LC1187" class="blob-line-code js-file-line">            <span class="c1">// See issue 144.</span></td>
      </tr>
      <tr>
        <td id="L1188" class="blob-line-num js-line-number" data-line-number="1188"></td>
        <td id="LC1188" class="blob-line-code js-file-line">            <span class="p">[</span><span class="nx">PR_PLAIN</span><span class="p">,</span>       <span class="sr">/^\\[\s\S]?/</span><span class="p">,</span> <span class="kc">null</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1189" class="blob-line-num js-line-number" data-line-number="1189"></td>
        <td id="LC1189" class="blob-line-code js-file-line">            <span class="p">[</span><span class="nx">PR_PUNCTUATION</span><span class="p">,</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="nx">punctuation</span><span class="p">),</span> <span class="kc">null</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1190" class="blob-line-num js-line-number" data-line-number="1190"></td>
        <td id="LC1190" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1191" class="blob-line-num js-line-number" data-line-number="1191"></td>
        <td id="LC1191" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">createSimpleLexer</span><span class="p">(</span><span class="nx">shortcutStylePatterns</span><span class="p">,</span> <span class="nx">fallthroughStylePatterns</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1192" class="blob-line-num js-line-number" data-line-number="1192"></td>
        <td id="LC1192" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1193" class="blob-line-num js-line-number" data-line-number="1193"></td>
        <td id="LC1193" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1194" class="blob-line-num js-line-number" data-line-number="1194"></td>
        <td id="LC1194" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">decorateSource</span> <span class="o">=</span> <span class="nx">sourceDecorator</span><span class="p">({</span></td>
      </tr>
      <tr>
        <td id="L1195" class="blob-line-num js-line-number" data-line-number="1195"></td>
        <td id="LC1195" class="blob-line-code js-file-line">            <span class="s1">&#39;keywords&#39;</span><span class="o">:</span> <span class="nx">ALL_KEYWORDS</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1196" class="blob-line-num js-line-number" data-line-number="1196"></td>
        <td id="LC1196" class="blob-line-code js-file-line">            <span class="s1">&#39;hashComments&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1197" class="blob-line-num js-line-number" data-line-number="1197"></td>
        <td id="LC1197" class="blob-line-code js-file-line">            <span class="s1">&#39;cStyleComments&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1198" class="blob-line-num js-line-number" data-line-number="1198"></td>
        <td id="LC1198" class="blob-line-code js-file-line">            <span class="s1">&#39;multiLineStrings&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1199" class="blob-line-num js-line-number" data-line-number="1199"></td>
        <td id="LC1199" class="blob-line-code js-file-line">            <span class="s1">&#39;regexLiterals&#39;</span><span class="o">:</span> <span class="kc">true</span></td>
      </tr>
      <tr>
        <td id="L1200" class="blob-line-num js-line-number" data-line-number="1200"></td>
        <td id="LC1200" class="blob-line-code js-file-line">          <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L1201" class="blob-line-num js-line-number" data-line-number="1201"></td>
        <td id="LC1201" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1202" class="blob-line-num js-line-number" data-line-number="1202"></td>
        <td id="LC1202" class="blob-line-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L1203" class="blob-line-num js-line-number" data-line-number="1203"></td>
        <td id="LC1203" class="blob-line-code js-file-line"><span class="cm">       * Given a DOM subtree, wraps it in a list, and puts each line into its own</span></td>
      </tr>
      <tr>
        <td id="L1204" class="blob-line-num js-line-number" data-line-number="1204"></td>
        <td id="LC1204" class="blob-line-code js-file-line"><span class="cm">       * list item.</span></td>
      </tr>
      <tr>
        <td id="L1205" class="blob-line-num js-line-number" data-line-number="1205"></td>
        <td id="LC1205" class="blob-line-code js-file-line"><span class="cm">       *</span></td>
      </tr>
      <tr>
        <td id="L1206" class="blob-line-num js-line-number" data-line-number="1206"></td>
        <td id="LC1206" class="blob-line-code js-file-line"><span class="cm">       * @param {Node} node modified in place.  Its content is pulled into an</span></td>
      </tr>
      <tr>
        <td id="L1207" class="blob-line-num js-line-number" data-line-number="1207"></td>
        <td id="LC1207" class="blob-line-code js-file-line"><span class="cm">       *     HTMLOListElement, and each line is moved into a separate list item.</span></td>
      </tr>
      <tr>
        <td id="L1208" class="blob-line-num js-line-number" data-line-number="1208"></td>
        <td id="LC1208" class="blob-line-code js-file-line"><span class="cm">       *     This requires cloning elements, so the input might not have unique</span></td>
      </tr>
      <tr>
        <td id="L1209" class="blob-line-num js-line-number" data-line-number="1209"></td>
        <td id="LC1209" class="blob-line-code js-file-line"><span class="cm">       *     IDs after numbering.</span></td>
      </tr>
      <tr>
        <td id="L1210" class="blob-line-num js-line-number" data-line-number="1210"></td>
        <td id="LC1210" class="blob-line-code js-file-line"><span class="cm">       * @param {boolean} isPreformatted true iff white-space in text nodes should</span></td>
      </tr>
      <tr>
        <td id="L1211" class="blob-line-num js-line-number" data-line-number="1211"></td>
        <td id="LC1211" class="blob-line-code js-file-line"><span class="cm">       *     be treated as significant.</span></td>
      </tr>
      <tr>
        <td id="L1212" class="blob-line-num js-line-number" data-line-number="1212"></td>
        <td id="LC1212" class="blob-line-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L1213" class="blob-line-num js-line-number" data-line-number="1213"></td>
        <td id="LC1213" class="blob-line-code js-file-line">      <span class="kd">function</span> <span class="nx">numberLines</span><span class="p">(</span><span class="nx">node</span><span class="p">,</span> <span class="nx">opt_startLineNum</span><span class="p">,</span> <span class="nx">isPreformatted</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1214" class="blob-line-num js-line-number" data-line-number="1214"></td>
        <td id="LC1214" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">nocode</span> <span class="o">=</span> <span class="sr">/(?:^|\s)nocode(?:\s|$)/</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1215" class="blob-line-num js-line-number" data-line-number="1215"></td>
        <td id="LC1215" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">lineBreak</span> <span class="o">=</span> <span class="sr">/\r\n?|\n/</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1216" class="blob-line-num js-line-number" data-line-number="1216"></td>
        <td id="LC1216" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L1217" class="blob-line-num js-line-number" data-line-number="1217"></td>
        <td id="LC1217" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nb">document</span> <span class="o">=</span> <span class="nx">node</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1218" class="blob-line-num js-line-number" data-line-number="1218"></td>
        <td id="LC1218" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L1219" class="blob-line-num js-line-number" data-line-number="1219"></td>
        <td id="LC1219" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">li</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;li&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1220" class="blob-line-num js-line-number" data-line-number="1220"></td>
        <td id="LC1220" class="blob-line-code js-file-line">        <span class="k">while</span> <span class="p">(</span><span class="nx">node</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1221" class="blob-line-num js-line-number" data-line-number="1221"></td>
        <td id="LC1221" class="blob-line-code js-file-line">          <span class="nx">li</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">node</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1222" class="blob-line-num js-line-number" data-line-number="1222"></td>
        <td id="LC1222" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1223" class="blob-line-num js-line-number" data-line-number="1223"></td>
        <td id="LC1223" class="blob-line-code js-file-line">        <span class="c1">// An array of lines.  We split below, so this is initialized to one</span></td>
      </tr>
      <tr>
        <td id="L1224" class="blob-line-num js-line-number" data-line-number="1224"></td>
        <td id="LC1224" class="blob-line-code js-file-line">        <span class="c1">// un-split line.</span></td>
      </tr>
      <tr>
        <td id="L1225" class="blob-line-num js-line-number" data-line-number="1225"></td>
        <td id="LC1225" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">listItems</span> <span class="o">=</span> <span class="p">[</span><span class="nx">li</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L1226" class="blob-line-num js-line-number" data-line-number="1226"></td>
        <td id="LC1226" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L1227" class="blob-line-num js-line-number" data-line-number="1227"></td>
        <td id="LC1227" class="blob-line-code js-file-line">        <span class="kd">function</span> <span class="nx">walk</span><span class="p">(</span><span class="nx">node</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1228" class="blob-line-num js-line-number" data-line-number="1228"></td>
        <td id="LC1228" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">type</span> <span class="o">=</span> <span class="nx">node</span><span class="p">.</span><span class="nx">nodeType</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1229" class="blob-line-num js-line-number" data-line-number="1229"></td>
        <td id="LC1229" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">type</span> <span class="o">==</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">nocode</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">node</span><span class="p">.</span><span class="nx">className</span><span class="p">))</span> <span class="p">{</span>  <span class="c1">// Element</span></td>
      </tr>
      <tr>
        <td id="L1230" class="blob-line-num js-line-number" data-line-number="1230"></td>
        <td id="LC1230" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="s1">&#39;br&#39;</span> <span class="o">===</span> <span class="nx">node</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1231" class="blob-line-num js-line-number" data-line-number="1231"></td>
        <td id="LC1231" class="blob-line-code js-file-line">              <span class="nx">breakAfter</span><span class="p">(</span><span class="nx">node</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1232" class="blob-line-num js-line-number" data-line-number="1232"></td>
        <td id="LC1232" class="blob-line-code js-file-line">              <span class="c1">// Discard the &lt;BR&gt; since it is now flush against a &lt;/LI&gt;.</span></td>
      </tr>
      <tr>
        <td id="L1233" class="blob-line-num js-line-number" data-line-number="1233"></td>
        <td id="LC1233" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="nx">node</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1234" class="blob-line-num js-line-number" data-line-number="1234"></td>
        <td id="LC1234" class="blob-line-code js-file-line">                <span class="nx">node</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">node</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1235" class="blob-line-num js-line-number" data-line-number="1235"></td>
        <td id="LC1235" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1236" class="blob-line-num js-line-number" data-line-number="1236"></td>
        <td id="LC1236" class="blob-line-code js-file-line">            <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1237" class="blob-line-num js-line-number" data-line-number="1237"></td>
        <td id="LC1237" class="blob-line-code js-file-line">              <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">child</span> <span class="o">=</span> <span class="nx">node</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">;</span> <span class="nx">child</span><span class="p">;</span> <span class="nx">child</span> <span class="o">=</span> <span class="nx">child</span><span class="p">.</span><span class="nx">nextSibling</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1238" class="blob-line-num js-line-number" data-line-number="1238"></td>
        <td id="LC1238" class="blob-line-code js-file-line">                <span class="nx">walk</span><span class="p">(</span><span class="nx">child</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1239" class="blob-line-num js-line-number" data-line-number="1239"></td>
        <td id="LC1239" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1240" class="blob-line-num js-line-number" data-line-number="1240"></td>
        <td id="LC1240" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1241" class="blob-line-num js-line-number" data-line-number="1241"></td>
        <td id="LC1241" class="blob-line-code js-file-line">          <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">((</span><span class="nx">type</span> <span class="o">==</span> <span class="mi">3</span> <span class="o">||</span> <span class="nx">type</span> <span class="o">==</span> <span class="mi">4</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">isPreformatted</span><span class="p">)</span> <span class="p">{</span>  <span class="c1">// Text</span></td>
      </tr>
      <tr>
        <td id="L1242" class="blob-line-num js-line-number" data-line-number="1242"></td>
        <td id="LC1242" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">text</span> <span class="o">=</span> <span class="nx">node</span><span class="p">.</span><span class="nx">nodeValue</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1243" class="blob-line-num js-line-number" data-line-number="1243"></td>
        <td id="LC1243" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">match</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">lineBreak</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1244" class="blob-line-num js-line-number" data-line-number="1244"></td>
        <td id="LC1244" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">match</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1245" class="blob-line-num js-line-number" data-line-number="1245"></td>
        <td id="LC1245" class="blob-line-code js-file-line">              <span class="kd">var</span> <span class="nx">firstLine</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">match</span><span class="p">.</span><span class="nx">index</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1246" class="blob-line-num js-line-number" data-line-number="1246"></td>
        <td id="LC1246" class="blob-line-code js-file-line">              <span class="nx">node</span><span class="p">.</span><span class="nx">nodeValue</span> <span class="o">=</span> <span class="nx">firstLine</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1247" class="blob-line-num js-line-number" data-line-number="1247"></td>
        <td id="LC1247" class="blob-line-code js-file-line">              <span class="kd">var</span> <span class="nx">tail</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">match</span><span class="p">.</span><span class="nx">index</span> <span class="o">+</span> <span class="nx">match</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1248" class="blob-line-num js-line-number" data-line-number="1248"></td>
        <td id="LC1248" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="nx">tail</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1249" class="blob-line-num js-line-number" data-line-number="1249"></td>
        <td id="LC1249" class="blob-line-code js-file-line">                <span class="kd">var</span> <span class="nx">parent</span> <span class="o">=</span> <span class="nx">node</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1250" class="blob-line-num js-line-number" data-line-number="1250"></td>
        <td id="LC1250" class="blob-line-code js-file-line">                <span class="nx">parent</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1251" class="blob-line-num js-line-number" data-line-number="1251"></td>
        <td id="LC1251" class="blob-line-code js-file-line">                  <span class="nb">document</span><span class="p">.</span><span class="nx">createTextNode</span><span class="p">(</span><span class="nx">tail</span><span class="p">),</span> <span class="nx">node</span><span class="p">.</span><span class="nx">nextSibling</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1252" class="blob-line-num js-line-number" data-line-number="1252"></td>
        <td id="LC1252" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1253" class="blob-line-num js-line-number" data-line-number="1253"></td>
        <td id="LC1253" class="blob-line-code js-file-line">              <span class="nx">breakAfter</span><span class="p">(</span><span class="nx">node</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1254" class="blob-line-num js-line-number" data-line-number="1254"></td>
        <td id="LC1254" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">firstLine</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1255" class="blob-line-num js-line-number" data-line-number="1255"></td>
        <td id="LC1255" class="blob-line-code js-file-line">                <span class="c1">// Don&#39;t leave blank text nodes in the DOM.</span></td>
      </tr>
      <tr>
        <td id="L1256" class="blob-line-num js-line-number" data-line-number="1256"></td>
        <td id="LC1256" class="blob-line-code js-file-line">                <span class="nx">node</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">node</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1257" class="blob-line-num js-line-number" data-line-number="1257"></td>
        <td id="LC1257" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1258" class="blob-line-num js-line-number" data-line-number="1258"></td>
        <td id="LC1258" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1259" class="blob-line-num js-line-number" data-line-number="1259"></td>
        <td id="LC1259" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1260" class="blob-line-num js-line-number" data-line-number="1260"></td>
        <td id="LC1260" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1261" class="blob-line-num js-line-number" data-line-number="1261"></td>
        <td id="LC1261" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L1262" class="blob-line-num js-line-number" data-line-number="1262"></td>
        <td id="LC1262" class="blob-line-code js-file-line">        <span class="c1">// Split a line after the given node.</span></td>
      </tr>
      <tr>
        <td id="L1263" class="blob-line-num js-line-number" data-line-number="1263"></td>
        <td id="LC1263" class="blob-line-code js-file-line">        <span class="kd">function</span> <span class="nx">breakAfter</span><span class="p">(</span><span class="nx">lineEndNode</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1264" class="blob-line-num js-line-number" data-line-number="1264"></td>
        <td id="LC1264" class="blob-line-code js-file-line">          <span class="c1">// If there&#39;s nothing to the right, then we can skip ending the line</span></td>
      </tr>
      <tr>
        <td id="L1265" class="blob-line-num js-line-number" data-line-number="1265"></td>
        <td id="LC1265" class="blob-line-code js-file-line">          <span class="c1">// here, and move root-wards since splitting just before an end-tag</span></td>
      </tr>
      <tr>
        <td id="L1266" class="blob-line-num js-line-number" data-line-number="1266"></td>
        <td id="LC1266" class="blob-line-code js-file-line">          <span class="c1">// would require us to create a bunch of empty copies.</span></td>
      </tr>
      <tr>
        <td id="L1267" class="blob-line-num js-line-number" data-line-number="1267"></td>
        <td id="LC1267" class="blob-line-code js-file-line">          <span class="k">while</span> <span class="p">(</span><span class="o">!</span><span class="nx">lineEndNode</span><span class="p">.</span><span class="nx">nextSibling</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1268" class="blob-line-num js-line-number" data-line-number="1268"></td>
        <td id="LC1268" class="blob-line-code js-file-line">            <span class="nx">lineEndNode</span> <span class="o">=</span> <span class="nx">lineEndNode</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1269" class="blob-line-num js-line-number" data-line-number="1269"></td>
        <td id="LC1269" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">lineEndNode</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1270" class="blob-line-num js-line-number" data-line-number="1270"></td>
        <td id="LC1270" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1271" class="blob-line-num js-line-number" data-line-number="1271"></td>
        <td id="LC1271" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L1272" class="blob-line-num js-line-number" data-line-number="1272"></td>
        <td id="LC1272" class="blob-line-code js-file-line">          <span class="kd">function</span> <span class="nx">breakLeftOf</span><span class="p">(</span><span class="nx">limit</span><span class="p">,</span> <span class="nx">copy</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1273" class="blob-line-num js-line-number" data-line-number="1273"></td>
        <td id="LC1273" class="blob-line-code js-file-line">            <span class="c1">// Clone shallowly if this node needs to be on both sides of the break.</span></td>
      </tr>
      <tr>
        <td id="L1274" class="blob-line-num js-line-number" data-line-number="1274"></td>
        <td id="LC1274" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">rightSide</span> <span class="o">=</span> <span class="nx">copy</span> <span class="o">?</span> <span class="nx">limit</span><span class="p">.</span><span class="nx">cloneNode</span><span class="p">(</span><span class="kc">false</span><span class="p">)</span> <span class="o">:</span> <span class="nx">limit</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1275" class="blob-line-num js-line-number" data-line-number="1275"></td>
        <td id="LC1275" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">parent</span> <span class="o">=</span> <span class="nx">limit</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1276" class="blob-line-num js-line-number" data-line-number="1276"></td>
        <td id="LC1276" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">parent</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1277" class="blob-line-num js-line-number" data-line-number="1277"></td>
        <td id="LC1277" class="blob-line-code js-file-line">              <span class="c1">// We clone the parent chain.</span></td>
      </tr>
      <tr>
        <td id="L1278" class="blob-line-num js-line-number" data-line-number="1278"></td>
        <td id="LC1278" class="blob-line-code js-file-line">              <span class="c1">// This helps us resurrect important styling elements that cross lines.</span></td>
      </tr>
      <tr>
        <td id="L1279" class="blob-line-num js-line-number" data-line-number="1279"></td>
        <td id="LC1279" class="blob-line-code js-file-line">              <span class="c1">// E.g. in &lt;i&gt;Foo&lt;br&gt;Bar&lt;/i&gt;</span></td>
      </tr>
      <tr>
        <td id="L1280" class="blob-line-num js-line-number" data-line-number="1280"></td>
        <td id="LC1280" class="blob-line-code js-file-line">              <span class="c1">// should be rewritten to &lt;li&gt;&lt;i&gt;Foo&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Bar&lt;/i&gt;&lt;/li&gt;.</span></td>
      </tr>
      <tr>
        <td id="L1281" class="blob-line-num js-line-number" data-line-number="1281"></td>
        <td id="LC1281" class="blob-line-code js-file-line">              <span class="kd">var</span> <span class="nx">parentClone</span> <span class="o">=</span> <span class="nx">breakLeftOf</span><span class="p">(</span><span class="nx">parent</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1282" class="blob-line-num js-line-number" data-line-number="1282"></td>
        <td id="LC1282" class="blob-line-code js-file-line">              <span class="c1">// Move the clone and everything to the right of the original</span></td>
      </tr>
      <tr>
        <td id="L1283" class="blob-line-num js-line-number" data-line-number="1283"></td>
        <td id="LC1283" class="blob-line-code js-file-line">              <span class="c1">// onto the cloned parent.</span></td>
      </tr>
      <tr>
        <td id="L1284" class="blob-line-num js-line-number" data-line-number="1284"></td>
        <td id="LC1284" class="blob-line-code js-file-line">              <span class="kd">var</span> <span class="nx">next</span> <span class="o">=</span> <span class="nx">limit</span><span class="p">.</span><span class="nx">nextSibling</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1285" class="blob-line-num js-line-number" data-line-number="1285"></td>
        <td id="LC1285" class="blob-line-code js-file-line">              <span class="nx">parentClone</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">rightSide</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1286" class="blob-line-num js-line-number" data-line-number="1286"></td>
        <td id="LC1286" class="blob-line-code js-file-line">              <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">sibling</span> <span class="o">=</span> <span class="nx">next</span><span class="p">;</span> <span class="nx">sibling</span><span class="p">;</span> <span class="nx">sibling</span> <span class="o">=</span> <span class="nx">next</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1287" class="blob-line-num js-line-number" data-line-number="1287"></td>
        <td id="LC1287" class="blob-line-code js-file-line">                <span class="nx">next</span> <span class="o">=</span> <span class="nx">sibling</span><span class="p">.</span><span class="nx">nextSibling</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1288" class="blob-line-num js-line-number" data-line-number="1288"></td>
        <td id="LC1288" class="blob-line-code js-file-line">                <span class="nx">parentClone</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">sibling</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1289" class="blob-line-num js-line-number" data-line-number="1289"></td>
        <td id="LC1289" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1290" class="blob-line-num js-line-number" data-line-number="1290"></td>
        <td id="LC1290" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1291" class="blob-line-num js-line-number" data-line-number="1291"></td>
        <td id="LC1291" class="blob-line-code js-file-line">            <span class="k">return</span> <span class="nx">rightSide</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1292" class="blob-line-num js-line-number" data-line-number="1292"></td>
        <td id="LC1292" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1293" class="blob-line-num js-line-number" data-line-number="1293"></td>
        <td id="LC1293" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L1294" class="blob-line-num js-line-number" data-line-number="1294"></td>
        <td id="LC1294" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">copiedListItem</span> <span class="o">=</span> <span class="nx">breakLeftOf</span><span class="p">(</span><span class="nx">lineEndNode</span><span class="p">.</span><span class="nx">nextSibling</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1295" class="blob-line-num js-line-number" data-line-number="1295"></td>
        <td id="LC1295" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L1296" class="blob-line-num js-line-number" data-line-number="1296"></td>
        <td id="LC1296" class="blob-line-code js-file-line">          <span class="c1">// Walk the parent chain until we reach an unattached LI.</span></td>
      </tr>
      <tr>
        <td id="L1297" class="blob-line-num js-line-number" data-line-number="1297"></td>
        <td id="LC1297" class="blob-line-code js-file-line">          <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">parent</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1298" class="blob-line-num js-line-number" data-line-number="1298"></td>
        <td id="LC1298" class="blob-line-code js-file-line">               <span class="c1">// Check nodeType since IE invents document fragments.</span></td>
      </tr>
      <tr>
        <td id="L1299" class="blob-line-num js-line-number" data-line-number="1299"></td>
        <td id="LC1299" class="blob-line-code js-file-line">               <span class="p">(</span><span class="nx">parent</span> <span class="o">=</span> <span class="nx">copiedListItem</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">parent</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span><span class="p">;)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1300" class="blob-line-num js-line-number" data-line-number="1300"></td>
        <td id="LC1300" class="blob-line-code js-file-line">            <span class="nx">copiedListItem</span> <span class="o">=</span> <span class="nx">parent</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1301" class="blob-line-num js-line-number" data-line-number="1301"></td>
        <td id="LC1301" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1302" class="blob-line-num js-line-number" data-line-number="1302"></td>
        <td id="LC1302" class="blob-line-code js-file-line">          <span class="c1">// Put it on the list of lines for later processing.</span></td>
      </tr>
      <tr>
        <td id="L1303" class="blob-line-num js-line-number" data-line-number="1303"></td>
        <td id="LC1303" class="blob-line-code js-file-line">          <span class="nx">listItems</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">copiedListItem</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1304" class="blob-line-num js-line-number" data-line-number="1304"></td>
        <td id="LC1304" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1305" class="blob-line-num js-line-number" data-line-number="1305"></td>
        <td id="LC1305" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L1306" class="blob-line-num js-line-number" data-line-number="1306"></td>
        <td id="LC1306" class="blob-line-code js-file-line">        <span class="c1">// Split lines while there are lines left to split.</span></td>
      </tr>
      <tr>
        <td id="L1307" class="blob-line-num js-line-number" data-line-number="1307"></td>
        <td id="LC1307" class="blob-line-code js-file-line">        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>  <span class="c1">// Number of lines that have been split so far.</span></td>
      </tr>
      <tr>
        <td id="L1308" class="blob-line-num js-line-number" data-line-number="1308"></td>
        <td id="LC1308" class="blob-line-code js-file-line">             <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">listItems</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>  <span class="c1">// length updated by breakAfter calls.</span></td>
      </tr>
      <tr>
        <td id="L1309" class="blob-line-num js-line-number" data-line-number="1309"></td>
        <td id="LC1309" class="blob-line-code js-file-line">             <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1310" class="blob-line-num js-line-number" data-line-number="1310"></td>
        <td id="LC1310" class="blob-line-code js-file-line">          <span class="nx">walk</span><span class="p">(</span><span class="nx">listItems</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1311" class="blob-line-num js-line-number" data-line-number="1311"></td>
        <td id="LC1311" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1312" class="blob-line-num js-line-number" data-line-number="1312"></td>
        <td id="LC1312" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L1313" class="blob-line-num js-line-number" data-line-number="1313"></td>
        <td id="LC1313" class="blob-line-code js-file-line">        <span class="c1">// Make sure numeric indices show correctly.</span></td>
      </tr>
      <tr>
        <td id="L1314" class="blob-line-num js-line-number" data-line-number="1314"></td>
        <td id="LC1314" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">opt_startLineNum</span> <span class="o">===</span> <span class="p">(</span><span class="nx">opt_startLineNum</span><span class="o">|</span><span class="mi">0</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1315" class="blob-line-num js-line-number" data-line-number="1315"></td>
        <td id="LC1315" class="blob-line-code js-file-line">          <span class="nx">listItems</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s1">&#39;value&#39;</span><span class="p">,</span> <span class="nx">opt_startLineNum</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1316" class="blob-line-num js-line-number" data-line-number="1316"></td>
        <td id="LC1316" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1317" class="blob-line-num js-line-number" data-line-number="1317"></td>
        <td id="LC1317" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L1318" class="blob-line-num js-line-number" data-line-number="1318"></td>
        <td id="LC1318" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">ol</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;ol&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1319" class="blob-line-num js-line-number" data-line-number="1319"></td>
        <td id="LC1319" class="blob-line-code js-file-line">        <span class="nx">ol</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="s1">&#39;linenums&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1320" class="blob-line-num js-line-number" data-line-number="1320"></td>
        <td id="LC1320" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">offset</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="p">((</span><span class="nx">opt_startLineNum</span> <span class="o">-</span> <span class="mi">1</span> <span class="cm">/* zero index */</span><span class="p">))</span> <span class="o">|</span> <span class="mi">0</span><span class="p">)</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1321" class="blob-line-num js-line-number" data-line-number="1321"></td>
        <td id="LC1321" class="blob-line-code js-file-line">        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">n</span> <span class="o">=</span> <span class="nx">listItems</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">n</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1322" class="blob-line-num js-line-number" data-line-number="1322"></td>
        <td id="LC1322" class="blob-line-code js-file-line">          <span class="nx">li</span> <span class="o">=</span> <span class="nx">listItems</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L1323" class="blob-line-num js-line-number" data-line-number="1323"></td>
        <td id="LC1323" class="blob-line-code js-file-line">          <span class="c1">// Stick a class on the LIs so that stylesheets can</span></td>
      </tr>
      <tr>
        <td id="L1324" class="blob-line-num js-line-number" data-line-number="1324"></td>
        <td id="LC1324" class="blob-line-code js-file-line">          <span class="c1">// color odd/even rows, or any other row pattern that</span></td>
      </tr>
      <tr>
        <td id="L1325" class="blob-line-num js-line-number" data-line-number="1325"></td>
        <td id="LC1325" class="blob-line-code js-file-line">          <span class="c1">// is co-prime with 10.</span></td>
      </tr>
      <tr>
        <td id="L1326" class="blob-line-num js-line-number" data-line-number="1326"></td>
        <td id="LC1326" class="blob-line-code js-file-line">          <span class="nx">li</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="s1">&#39;L&#39;</span> <span class="o">+</span> <span class="p">((</span><span class="nx">i</span> <span class="o">+</span> <span class="nx">offset</span><span class="p">)</span> <span class="o">%</span> <span class="mi">10</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1327" class="blob-line-num js-line-number" data-line-number="1327"></td>
        <td id="LC1327" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">li</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1328" class="blob-line-num js-line-number" data-line-number="1328"></td>
        <td id="LC1328" class="blob-line-code js-file-line">            <span class="nx">li</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">createTextNode</span><span class="p">(</span><span class="s1">&#39;\xA0&#39;</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L1329" class="blob-line-num js-line-number" data-line-number="1329"></td>
        <td id="LC1329" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1330" class="blob-line-num js-line-number" data-line-number="1330"></td>
        <td id="LC1330" class="blob-line-code js-file-line">          <span class="nx">ol</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">li</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1331" class="blob-line-num js-line-number" data-line-number="1331"></td>
        <td id="LC1331" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1332" class="blob-line-num js-line-number" data-line-number="1332"></td>
        <td id="LC1332" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L1333" class="blob-line-num js-line-number" data-line-number="1333"></td>
        <td id="LC1333" class="blob-line-code js-file-line">        <span class="nx">node</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">ol</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1334" class="blob-line-num js-line-number" data-line-number="1334"></td>
        <td id="LC1334" class="blob-line-code js-file-line">      <span class="p">}</span>    </td>
      </tr>
      <tr>
        <td id="L1335" class="blob-line-num js-line-number" data-line-number="1335"></td>
        <td id="LC1335" class="blob-line-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L1336" class="blob-line-num js-line-number" data-line-number="1336"></td>
        <td id="LC1336" class="blob-line-code js-file-line"><span class="cm">       * Breaks {@code job.sourceCode} around style boundaries in</span></td>
      </tr>
      <tr>
        <td id="L1337" class="blob-line-num js-line-number" data-line-number="1337"></td>
        <td id="LC1337" class="blob-line-code js-file-line"><span class="cm">       * {@code job.decorations} and modifies {@code job.sourceNode} in place.</span></td>
      </tr>
      <tr>
        <td id="L1338" class="blob-line-num js-line-number" data-line-number="1338"></td>
        <td id="LC1338" class="blob-line-code js-file-line"><span class="cm">       * @param {Object} job like &lt;pre&gt;{</span></td>
      </tr>
      <tr>
        <td id="L1339" class="blob-line-num js-line-number" data-line-number="1339"></td>
        <td id="LC1339" class="blob-line-code js-file-line"><span class="cm">       *    sourceCode: {string} source as plain text,</span></td>
      </tr>
      <tr>
        <td id="L1340" class="blob-line-num js-line-number" data-line-number="1340"></td>
        <td id="LC1340" class="blob-line-code js-file-line"><span class="cm">       *    sourceNode: {HTMLElement} the element containing the source,</span></td>
      </tr>
      <tr>
        <td id="L1341" class="blob-line-num js-line-number" data-line-number="1341"></td>
        <td id="LC1341" class="blob-line-code js-file-line"><span class="cm">       *    spans: {Array.&lt;number|Node&gt;} alternating span start indices into source</span></td>
      </tr>
      <tr>
        <td id="L1342" class="blob-line-num js-line-number" data-line-number="1342"></td>
        <td id="LC1342" class="blob-line-code js-file-line"><span class="cm">       *       and the text node or element (e.g. {@code &lt;BR&gt;}) corresponding to that</span></td>
      </tr>
      <tr>
        <td id="L1343" class="blob-line-num js-line-number" data-line-number="1343"></td>
        <td id="LC1343" class="blob-line-code js-file-line"><span class="cm">       *       span.</span></td>
      </tr>
      <tr>
        <td id="L1344" class="blob-line-num js-line-number" data-line-number="1344"></td>
        <td id="LC1344" class="blob-line-code js-file-line"><span class="cm">       *    decorations: {Array.&lt;number|string} an array of style classes preceded</span></td>
      </tr>
      <tr>
        <td id="L1345" class="blob-line-num js-line-number" data-line-number="1345"></td>
        <td id="LC1345" class="blob-line-code js-file-line"><span class="cm">       *       by the position at which they start in job.sourceCode in order</span></td>
      </tr>
      <tr>
        <td id="L1346" class="blob-line-num js-line-number" data-line-number="1346"></td>
        <td id="LC1346" class="blob-line-code js-file-line"><span class="cm">       * }&lt;/pre&gt;</span></td>
      </tr>
      <tr>
        <td id="L1347" class="blob-line-num js-line-number" data-line-number="1347"></td>
        <td id="LC1347" class="blob-line-code js-file-line"><span class="cm">       * @private</span></td>
      </tr>
      <tr>
        <td id="L1348" class="blob-line-num js-line-number" data-line-number="1348"></td>
        <td id="LC1348" class="blob-line-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L1349" class="blob-line-num js-line-number" data-line-number="1349"></td>
        <td id="LC1349" class="blob-line-code js-file-line">      <span class="kd">function</span> <span class="nx">recombineTagsAndDecorations</span><span class="p">(</span><span class="nx">job</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1350" class="blob-line-num js-line-number" data-line-number="1350"></td>
        <td id="LC1350" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">isIE8OrEarlier</span> <span class="o">=</span> <span class="sr">/\bMSIE\s(\d+)/</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1351" class="blob-line-num js-line-number" data-line-number="1351"></td>
        <td id="LC1351" class="blob-line-code js-file-line">        <span class="nx">isIE8OrEarlier</span> <span class="o">=</span> <span class="nx">isIE8OrEarlier</span> <span class="o">&amp;&amp;</span> <span class="o">+</span><span class="nx">isIE8OrEarlier</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">&lt;=</span> <span class="mi">8</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1352" class="blob-line-num js-line-number" data-line-number="1352"></td>
        <td id="LC1352" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">newlineRe</span> <span class="o">=</span> <span class="sr">/\n/g</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1353" class="blob-line-num js-line-number" data-line-number="1353"></td>
        <td id="LC1353" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L1354" class="blob-line-num js-line-number" data-line-number="1354"></td>
        <td id="LC1354" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">source</span> <span class="o">=</span> <span class="nx">job</span><span class="p">.</span><span class="nx">sourceCode</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1355" class="blob-line-num js-line-number" data-line-number="1355"></td>
        <td id="LC1355" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">sourceLength</span> <span class="o">=</span> <span class="nx">source</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1356" class="blob-line-num js-line-number" data-line-number="1356"></td>
        <td id="LC1356" class="blob-line-code js-file-line">        <span class="c1">// Index into source after the last code-unit recombined.</span></td>
      </tr>
      <tr>
        <td id="L1357" class="blob-line-num js-line-number" data-line-number="1357"></td>
        <td id="LC1357" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">sourceIndex</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1358" class="blob-line-num js-line-number" data-line-number="1358"></td>
        <td id="LC1358" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L1359" class="blob-line-num js-line-number" data-line-number="1359"></td>
        <td id="LC1359" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">spans</span> <span class="o">=</span> <span class="nx">job</span><span class="p">.</span><span class="nx">spans</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1360" class="blob-line-num js-line-number" data-line-number="1360"></td>
        <td id="LC1360" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">nSpans</span> <span class="o">=</span> <span class="nx">spans</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1361" class="blob-line-num js-line-number" data-line-number="1361"></td>
        <td id="LC1361" class="blob-line-code js-file-line">        <span class="c1">// Index into spans after the last span which ends at or before sourceIndex.</span></td>
      </tr>
      <tr>
        <td id="L1362" class="blob-line-num js-line-number" data-line-number="1362"></td>
        <td id="LC1362" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">spanIndex</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1363" class="blob-line-num js-line-number" data-line-number="1363"></td>
        <td id="LC1363" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L1364" class="blob-line-num js-line-number" data-line-number="1364"></td>
        <td id="LC1364" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">decorations</span> <span class="o">=</span> <span class="nx">job</span><span class="p">.</span><span class="nx">decorations</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1365" class="blob-line-num js-line-number" data-line-number="1365"></td>
        <td id="LC1365" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">nDecorations</span> <span class="o">=</span> <span class="nx">decorations</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1366" class="blob-line-num js-line-number" data-line-number="1366"></td>
        <td id="LC1366" class="blob-line-code js-file-line">        <span class="c1">// Index into decorations after the last decoration which ends at or before</span></td>
      </tr>
      <tr>
        <td id="L1367" class="blob-line-num js-line-number" data-line-number="1367"></td>
        <td id="LC1367" class="blob-line-code js-file-line">        <span class="c1">// sourceIndex.</span></td>
      </tr>
      <tr>
        <td id="L1368" class="blob-line-num js-line-number" data-line-number="1368"></td>
        <td id="LC1368" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">decorationIndex</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1369" class="blob-line-num js-line-number" data-line-number="1369"></td>
        <td id="LC1369" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L1370" class="blob-line-num js-line-number" data-line-number="1370"></td>
        <td id="LC1370" class="blob-line-code js-file-line">        <span class="c1">// Remove all zero-length decorations.</span></td>
      </tr>
      <tr>
        <td id="L1371" class="blob-line-num js-line-number" data-line-number="1371"></td>
        <td id="LC1371" class="blob-line-code js-file-line">        <span class="nx">decorations</span><span class="p">[</span><span class="nx">nDecorations</span><span class="p">]</span> <span class="o">=</span> <span class="nx">sourceLength</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1372" class="blob-line-num js-line-number" data-line-number="1372"></td>
        <td id="LC1372" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">decPos</span><span class="p">,</span> <span class="nx">i</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1373" class="blob-line-num js-line-number" data-line-number="1373"></td>
        <td id="LC1373" class="blob-line-code js-file-line">        <span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="nx">decPos</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">nDecorations</span><span class="p">;)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1374" class="blob-line-num js-line-number" data-line-number="1374"></td>
        <td id="LC1374" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">decorations</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">!==</span> <span class="nx">decorations</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">2</span><span class="p">])</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1375" class="blob-line-num js-line-number" data-line-number="1375"></td>
        <td id="LC1375" class="blob-line-code js-file-line">            <span class="nx">decorations</span><span class="p">[</span><span class="nx">decPos</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">decorations</span><span class="p">[</span><span class="nx">i</span><span class="o">++</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L1376" class="blob-line-num js-line-number" data-line-number="1376"></td>
        <td id="LC1376" class="blob-line-code js-file-line">            <span class="nx">decorations</span><span class="p">[</span><span class="nx">decPos</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">decorations</span><span class="p">[</span><span class="nx">i</span><span class="o">++</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L1377" class="blob-line-num js-line-number" data-line-number="1377"></td>
        <td id="LC1377" class="blob-line-code js-file-line">          <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1378" class="blob-line-num js-line-number" data-line-number="1378"></td>
        <td id="LC1378" class="blob-line-code js-file-line">            <span class="nx">i</span> <span class="o">+=</span> <span class="mi">2</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1379" class="blob-line-num js-line-number" data-line-number="1379"></td>
        <td id="LC1379" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1380" class="blob-line-num js-line-number" data-line-number="1380"></td>
        <td id="LC1380" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1381" class="blob-line-num js-line-number" data-line-number="1381"></td>
        <td id="LC1381" class="blob-line-code js-file-line">        <span class="nx">nDecorations</span> <span class="o">=</span> <span class="nx">decPos</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1382" class="blob-line-num js-line-number" data-line-number="1382"></td>
        <td id="LC1382" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L1383" class="blob-line-num js-line-number" data-line-number="1383"></td>
        <td id="LC1383" class="blob-line-code js-file-line">        <span class="c1">// Simplify decorations.</span></td>
      </tr>
      <tr>
        <td id="L1384" class="blob-line-num js-line-number" data-line-number="1384"></td>
        <td id="LC1384" class="blob-line-code js-file-line">        <span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="nx">decPos</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">nDecorations</span><span class="p">;)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1385" class="blob-line-num js-line-number" data-line-number="1385"></td>
        <td id="LC1385" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">startPos</span> <span class="o">=</span> <span class="nx">decorations</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L1386" class="blob-line-num js-line-number" data-line-number="1386"></td>
        <td id="LC1386" class="blob-line-code js-file-line">          <span class="c1">// Conflate all adjacent decorations that use the same style.</span></td>
      </tr>
      <tr>
        <td id="L1387" class="blob-line-num js-line-number" data-line-number="1387"></td>
        <td id="LC1387" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">startDec</span> <span class="o">=</span> <span class="nx">decorations</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L1388" class="blob-line-num js-line-number" data-line-number="1388"></td>
        <td id="LC1388" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">end</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">2</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1389" class="blob-line-num js-line-number" data-line-number="1389"></td>
        <td id="LC1389" class="blob-line-code js-file-line">          <span class="k">while</span> <span class="p">(</span><span class="nx">end</span> <span class="o">+</span> <span class="mi">2</span> <span class="o">&lt;=</span> <span class="nx">nDecorations</span> <span class="o">&amp;&amp;</span> <span class="nx">decorations</span><span class="p">[</span><span class="nx">end</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">===</span> <span class="nx">startDec</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1390" class="blob-line-num js-line-number" data-line-number="1390"></td>
        <td id="LC1390" class="blob-line-code js-file-line">            <span class="nx">end</span> <span class="o">+=</span> <span class="mi">2</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1391" class="blob-line-num js-line-number" data-line-number="1391"></td>
        <td id="LC1391" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1392" class="blob-line-num js-line-number" data-line-number="1392"></td>
        <td id="LC1392" class="blob-line-code js-file-line">          <span class="nx">decorations</span><span class="p">[</span><span class="nx">decPos</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">startPos</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1393" class="blob-line-num js-line-number" data-line-number="1393"></td>
        <td id="LC1393" class="blob-line-code js-file-line">          <span class="nx">decorations</span><span class="p">[</span><span class="nx">decPos</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">startDec</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1394" class="blob-line-num js-line-number" data-line-number="1394"></td>
        <td id="LC1394" class="blob-line-code js-file-line">          <span class="nx">i</span> <span class="o">=</span> <span class="nx">end</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1395" class="blob-line-num js-line-number" data-line-number="1395"></td>
        <td id="LC1395" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1396" class="blob-line-num js-line-number" data-line-number="1396"></td>
        <td id="LC1396" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L1397" class="blob-line-num js-line-number" data-line-number="1397"></td>
        <td id="LC1397" class="blob-line-code js-file-line">        <span class="nx">nDecorations</span> <span class="o">=</span> <span class="nx">decorations</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="nx">decPos</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1398" class="blob-line-num js-line-number" data-line-number="1398"></td>
        <td id="LC1398" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L1399" class="blob-line-num js-line-number" data-line-number="1399"></td>
        <td id="LC1399" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">sourceNode</span> <span class="o">=</span> <span class="nx">job</span><span class="p">.</span><span class="nx">sourceNode</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1400" class="blob-line-num js-line-number" data-line-number="1400"></td>
        <td id="LC1400" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">oldDisplay</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1401" class="blob-line-num js-line-number" data-line-number="1401"></td>
        <td id="LC1401" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">sourceNode</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1402" class="blob-line-num js-line-number" data-line-number="1402"></td>
        <td id="LC1402" class="blob-line-code js-file-line">          <span class="nx">oldDisplay</span> <span class="o">=</span> <span class="nx">sourceNode</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1403" class="blob-line-num js-line-number" data-line-number="1403"></td>
        <td id="LC1403" class="blob-line-code js-file-line">          <span class="nx">sourceNode</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span> <span class="o">=</span> <span class="s1">&#39;none&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1404" class="blob-line-num js-line-number" data-line-number="1404"></td>
        <td id="LC1404" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1405" class="blob-line-num js-line-number" data-line-number="1405"></td>
        <td id="LC1405" class="blob-line-code js-file-line">        <span class="k">try</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1406" class="blob-line-num js-line-number" data-line-number="1406"></td>
        <td id="LC1406" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">decoration</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1407" class="blob-line-num js-line-number" data-line-number="1407"></td>
        <td id="LC1407" class="blob-line-code js-file-line">          <span class="k">while</span> <span class="p">(</span><span class="nx">spanIndex</span> <span class="o">&lt;</span> <span class="nx">nSpans</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1408" class="blob-line-num js-line-number" data-line-number="1408"></td>
        <td id="LC1408" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">spanStart</span> <span class="o">=</span> <span class="nx">spans</span><span class="p">[</span><span class="nx">spanIndex</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L1409" class="blob-line-num js-line-number" data-line-number="1409"></td>
        <td id="LC1409" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">spanEnd</span> <span class="o">=</span> <span class="nx">spans</span><span class="p">[</span><span class="nx">spanIndex</span> <span class="o">+</span> <span class="mi">2</span><span class="p">]</span> <span class="o">||</span> <span class="nx">sourceLength</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1410" class="blob-line-num js-line-number" data-line-number="1410"></td>
        <td id="LC1410" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L1411" class="blob-line-num js-line-number" data-line-number="1411"></td>
        <td id="LC1411" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">decEnd</span> <span class="o">=</span> <span class="nx">decorations</span><span class="p">[</span><span class="nx">decorationIndex</span> <span class="o">+</span> <span class="mi">2</span><span class="p">]</span> <span class="o">||</span> <span class="nx">sourceLength</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1412" class="blob-line-num js-line-number" data-line-number="1412"></td>
        <td id="LC1412" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L1413" class="blob-line-num js-line-number" data-line-number="1413"></td>
        <td id="LC1413" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">end</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">spanEnd</span><span class="p">,</span> <span class="nx">decEnd</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1414" class="blob-line-num js-line-number" data-line-number="1414"></td>
        <td id="LC1414" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L1415" class="blob-line-num js-line-number" data-line-number="1415"></td>
        <td id="LC1415" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">textNode</span> <span class="o">=</span> <span class="nx">spans</span><span class="p">[</span><span class="nx">spanIndex</span> <span class="o">+</span> <span class="mi">1</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L1416" class="blob-line-num js-line-number" data-line-number="1416"></td>
        <td id="LC1416" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">styledText</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1417" class="blob-line-num js-line-number" data-line-number="1417"></td>
        <td id="LC1417" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">textNode</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">!==</span> <span class="mi">1</span>  <span class="c1">// Don&#39;t muck with &lt;BR&gt;s or &lt;LI&gt;s</span></td>
      </tr>
      <tr>
        <td id="L1418" class="blob-line-num js-line-number" data-line-number="1418"></td>
        <td id="LC1418" class="blob-line-code js-file-line">                <span class="c1">// Don&#39;t introduce spans around empty text nodes.</span></td>
      </tr>
      <tr>
        <td id="L1419" class="blob-line-num js-line-number" data-line-number="1419"></td>
        <td id="LC1419" class="blob-line-code js-file-line">                <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">styledText</span> <span class="o">=</span> <span class="nx">source</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">sourceIndex</span><span class="p">,</span> <span class="nx">end</span><span class="p">)))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1420" class="blob-line-num js-line-number" data-line-number="1420"></td>
        <td id="LC1420" class="blob-line-code js-file-line">              <span class="c1">// This may seem bizarre, and it is.  Emitting LF on IE causes the</span></td>
      </tr>
      <tr>
        <td id="L1421" class="blob-line-num js-line-number" data-line-number="1421"></td>
        <td id="LC1421" class="blob-line-code js-file-line">              <span class="c1">// code to display with spaces instead of line breaks.</span></td>
      </tr>
      <tr>
        <td id="L1422" class="blob-line-num js-line-number" data-line-number="1422"></td>
        <td id="LC1422" class="blob-line-code js-file-line">              <span class="c1">// Emitting Windows standard issue linebreaks (CRLF) causes a blank</span></td>
      </tr>
      <tr>
        <td id="L1423" class="blob-line-num js-line-number" data-line-number="1423"></td>
        <td id="LC1423" class="blob-line-code js-file-line">              <span class="c1">// space to appear at the beginning of every line but the first.</span></td>
      </tr>
      <tr>
        <td id="L1424" class="blob-line-num js-line-number" data-line-number="1424"></td>
        <td id="LC1424" class="blob-line-code js-file-line">              <span class="c1">// Emitting an old Mac OS 9 line separator makes everything spiffy.</span></td>
      </tr>
      <tr>
        <td id="L1425" class="blob-line-num js-line-number" data-line-number="1425"></td>
        <td id="LC1425" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="nx">isIE8OrEarlier</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1426" class="blob-line-num js-line-number" data-line-number="1426"></td>
        <td id="LC1426" class="blob-line-code js-file-line">                <span class="nx">styledText</span> <span class="o">=</span> <span class="nx">styledText</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">newlineRe</span><span class="p">,</span> <span class="s1">&#39;\r&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1427" class="blob-line-num js-line-number" data-line-number="1427"></td>
        <td id="LC1427" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1428" class="blob-line-num js-line-number" data-line-number="1428"></td>
        <td id="LC1428" class="blob-line-code js-file-line">              <span class="nx">textNode</span><span class="p">.</span><span class="nx">nodeValue</span> <span class="o">=</span> <span class="nx">styledText</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1429" class="blob-line-num js-line-number" data-line-number="1429"></td>
        <td id="LC1429" class="blob-line-code js-file-line">              <span class="kd">var</span> <span class="nb">document</span> <span class="o">=</span> <span class="nx">textNode</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1430" class="blob-line-num js-line-number" data-line-number="1430"></td>
        <td id="LC1430" class="blob-line-code js-file-line">              <span class="kd">var</span> <span class="nx">span</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;span&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1431" class="blob-line-num js-line-number" data-line-number="1431"></td>
        <td id="LC1431" class="blob-line-code js-file-line">              <span class="nx">span</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="nx">decorations</span><span class="p">[</span><span class="nx">decorationIndex</span> <span class="o">+</span> <span class="mi">1</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L1432" class="blob-line-num js-line-number" data-line-number="1432"></td>
        <td id="LC1432" class="blob-line-code js-file-line">              <span class="kd">var</span> <span class="nx">parentNode</span> <span class="o">=</span> <span class="nx">textNode</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1433" class="blob-line-num js-line-number" data-line-number="1433"></td>
        <td id="LC1433" class="blob-line-code js-file-line">              <span class="nx">parentNode</span><span class="p">.</span><span class="nx">replaceChild</span><span class="p">(</span><span class="nx">span</span><span class="p">,</span> <span class="nx">textNode</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1434" class="blob-line-num js-line-number" data-line-number="1434"></td>
        <td id="LC1434" class="blob-line-code js-file-line">              <span class="nx">span</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">textNode</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1435" class="blob-line-num js-line-number" data-line-number="1435"></td>
        <td id="LC1435" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="nx">sourceIndex</span> <span class="o">&lt;</span> <span class="nx">spanEnd</span><span class="p">)</span> <span class="p">{</span>  <span class="c1">// Split off a text node.</span></td>
      </tr>
      <tr>
        <td id="L1436" class="blob-line-num js-line-number" data-line-number="1436"></td>
        <td id="LC1436" class="blob-line-code js-file-line">                <span class="nx">spans</span><span class="p">[</span><span class="nx">spanIndex</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">textNode</span></td>
      </tr>
      <tr>
        <td id="L1437" class="blob-line-num js-line-number" data-line-number="1437"></td>
        <td id="LC1437" class="blob-line-code js-file-line">                    <span class="c1">// TODO: Possibly optimize by using &#39;&#39; if there&#39;s no flicker.</span></td>
      </tr>
      <tr>
        <td id="L1438" class="blob-line-num js-line-number" data-line-number="1438"></td>
        <td id="LC1438" class="blob-line-code js-file-line">                    <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createTextNode</span><span class="p">(</span><span class="nx">source</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">end</span><span class="p">,</span> <span class="nx">spanEnd</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L1439" class="blob-line-num js-line-number" data-line-number="1439"></td>
        <td id="LC1439" class="blob-line-code js-file-line">                <span class="nx">parentNode</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">textNode</span><span class="p">,</span> <span class="nx">span</span><span class="p">.</span><span class="nx">nextSibling</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1440" class="blob-line-num js-line-number" data-line-number="1440"></td>
        <td id="LC1440" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1441" class="blob-line-num js-line-number" data-line-number="1441"></td>
        <td id="LC1441" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1442" class="blob-line-num js-line-number" data-line-number="1442"></td>
        <td id="LC1442" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L1443" class="blob-line-num js-line-number" data-line-number="1443"></td>
        <td id="LC1443" class="blob-line-code js-file-line">            <span class="nx">sourceIndex</span> <span class="o">=</span> <span class="nx">end</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1444" class="blob-line-num js-line-number" data-line-number="1444"></td>
        <td id="LC1444" class="blob-line-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L1445" class="blob-line-num js-line-number" data-line-number="1445"></td>
        <td id="LC1445" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">sourceIndex</span> <span class="o">&gt;=</span> <span class="nx">spanEnd</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1446" class="blob-line-num js-line-number" data-line-number="1446"></td>
        <td id="LC1446" class="blob-line-code js-file-line">              <span class="nx">spanIndex</span> <span class="o">+=</span> <span class="mi">2</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1447" class="blob-line-num js-line-number" data-line-number="1447"></td>
        <td id="LC1447" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1448" class="blob-line-num js-line-number" data-line-number="1448"></td>
        <td id="LC1448" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">sourceIndex</span> <span class="o">&gt;=</span> <span class="nx">decEnd</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1449" class="blob-line-num js-line-number" data-line-number="1449"></td>
        <td id="LC1449" class="blob-line-code js-file-line">              <span class="nx">decorationIndex</span> <span class="o">+=</span> <span class="mi">2</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1450" class="blob-line-num js-line-number" data-line-number="1450"></td>
        <td id="LC1450" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1451" class="blob-line-num js-line-number" data-line-number="1451"></td>
        <td id="LC1451" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1452" class="blob-line-num js-line-number" data-line-number="1452"></td>
        <td id="LC1452" class="blob-line-code js-file-line">        <span class="p">}</span> <span class="k">finally</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1453" class="blob-line-num js-line-number" data-line-number="1453"></td>
        <td id="LC1453" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">sourceNode</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1454" class="blob-line-num js-line-number" data-line-number="1454"></td>
        <td id="LC1454" class="blob-line-code js-file-line">            <span class="nx">sourceNode</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span> <span class="o">=</span> <span class="nx">oldDisplay</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1455" class="blob-line-num js-line-number" data-line-number="1455"></td>
        <td id="LC1455" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1456" class="blob-line-num js-line-number" data-line-number="1456"></td>
        <td id="LC1456" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1457" class="blob-line-num js-line-number" data-line-number="1457"></td>
        <td id="LC1457" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1458" class="blob-line-num js-line-number" data-line-number="1458"></td>
        <td id="LC1458" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1459" class="blob-line-num js-line-number" data-line-number="1459"></td>
        <td id="LC1459" class="blob-line-code js-file-line">      <span class="cm">/** Maps language-specific file extensions to handlers. */</span></td>
      </tr>
      <tr>
        <td id="L1460" class="blob-line-num js-line-number" data-line-number="1460"></td>
        <td id="LC1460" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">langHandlerRegistry</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L1461" class="blob-line-num js-line-number" data-line-number="1461"></td>
        <td id="LC1461" class="blob-line-code js-file-line">      <span class="cm">/** Register a language handler for the given file extensions.</span></td>
      </tr>
      <tr>
        <td id="L1462" class="blob-line-num js-line-number" data-line-number="1462"></td>
        <td id="LC1462" class="blob-line-code js-file-line"><span class="cm">        * @param {function (Object)} handler a function from source code to a list</span></td>
      </tr>
      <tr>
        <td id="L1463" class="blob-line-num js-line-number" data-line-number="1463"></td>
        <td id="LC1463" class="blob-line-code js-file-line"><span class="cm">        *      of decorations.  Takes a single argument job which describes the</span></td>
      </tr>
      <tr>
        <td id="L1464" class="blob-line-num js-line-number" data-line-number="1464"></td>
        <td id="LC1464" class="blob-line-code js-file-line"><span class="cm">        *      state of the computation.   The single parameter has the form</span></td>
      </tr>
      <tr>
        <td id="L1465" class="blob-line-num js-line-number" data-line-number="1465"></td>
        <td id="LC1465" class="blob-line-code js-file-line"><span class="cm">        *      {@code {</span></td>
      </tr>
      <tr>
        <td id="L1466" class="blob-line-num js-line-number" data-line-number="1466"></td>
        <td id="LC1466" class="blob-line-code js-file-line"><span class="cm">        *        sourceCode: {string} as plain text.</span></td>
      </tr>
      <tr>
        <td id="L1467" class="blob-line-num js-line-number" data-line-number="1467"></td>
        <td id="LC1467" class="blob-line-code js-file-line"><span class="cm">        *        decorations: {Array.&lt;number|string&gt;} an array of style classes</span></td>
      </tr>
      <tr>
        <td id="L1468" class="blob-line-num js-line-number" data-line-number="1468"></td>
        <td id="LC1468" class="blob-line-code js-file-line"><span class="cm">        *                     preceded by the position at which they start in</span></td>
      </tr>
      <tr>
        <td id="L1469" class="blob-line-num js-line-number" data-line-number="1469"></td>
        <td id="LC1469" class="blob-line-code js-file-line"><span class="cm">        *                     job.sourceCode in order.</span></td>
      </tr>
      <tr>
        <td id="L1470" class="blob-line-num js-line-number" data-line-number="1470"></td>
        <td id="LC1470" class="blob-line-code js-file-line"><span class="cm">        *                     The language handler should assigned this field.</span></td>
      </tr>
      <tr>
        <td id="L1471" class="blob-line-num js-line-number" data-line-number="1471"></td>
        <td id="LC1471" class="blob-line-code js-file-line"><span class="cm">        *        basePos: {int} the position of source in the larger source chunk.</span></td>
      </tr>
      <tr>
        <td id="L1472" class="blob-line-num js-line-number" data-line-number="1472"></td>
        <td id="LC1472" class="blob-line-code js-file-line"><span class="cm">        *                 All positions in the output decorations array are relative</span></td>
      </tr>
      <tr>
        <td id="L1473" class="blob-line-num js-line-number" data-line-number="1473"></td>
        <td id="LC1473" class="blob-line-code js-file-line"><span class="cm">        *                 to the larger source chunk.</span></td>
      </tr>
      <tr>
        <td id="L1474" class="blob-line-num js-line-number" data-line-number="1474"></td>
        <td id="LC1474" class="blob-line-code js-file-line"><span class="cm">        *      } }</span></td>
      </tr>
      <tr>
        <td id="L1475" class="blob-line-num js-line-number" data-line-number="1475"></td>
        <td id="LC1475" class="blob-line-code js-file-line"><span class="cm">        * @param {Array.&lt;string&gt;} fileExtensions</span></td>
      </tr>
      <tr>
        <td id="L1476" class="blob-line-num js-line-number" data-line-number="1476"></td>
        <td id="LC1476" class="blob-line-code js-file-line"><span class="cm">        */</span></td>
      </tr>
      <tr>
        <td id="L1477" class="blob-line-num js-line-number" data-line-number="1477"></td>
        <td id="LC1477" class="blob-line-code js-file-line">      <span class="kd">function</span> <span class="nx">registerLangHandler</span><span class="p">(</span><span class="nx">handler</span><span class="p">,</span> <span class="nx">fileExtensions</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1478" class="blob-line-num js-line-number" data-line-number="1478"></td>
        <td id="LC1478" class="blob-line-code js-file-line">        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">fileExtensions</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">--</span><span class="nx">i</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1479" class="blob-line-num js-line-number" data-line-number="1479"></td>
        <td id="LC1479" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">ext</span> <span class="o">=</span> <span class="nx">fileExtensions</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L1480" class="blob-line-num js-line-number" data-line-number="1480"></td>
        <td id="LC1480" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">langHandlerRegistry</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">ext</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1481" class="blob-line-num js-line-number" data-line-number="1481"></td>
        <td id="LC1481" class="blob-line-code js-file-line">            <span class="nx">langHandlerRegistry</span><span class="p">[</span><span class="nx">ext</span><span class="p">]</span> <span class="o">=</span> <span class="nx">handler</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1482" class="blob-line-num js-line-number" data-line-number="1482"></td>
        <td id="LC1482" class="blob-line-code js-file-line">          <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">win</span><span class="p">[</span><span class="s1">&#39;console&#39;</span><span class="p">])</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1483" class="blob-line-num js-line-number" data-line-number="1483"></td>
        <td id="LC1483" class="blob-line-code js-file-line">            <span class="nx">console</span><span class="p">[</span><span class="s1">&#39;warn&#39;</span><span class="p">](</span><span class="s1">&#39;cannot override language handler %s&#39;</span><span class="p">,</span> <span class="nx">ext</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1484" class="blob-line-num js-line-number" data-line-number="1484"></td>
        <td id="LC1484" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1485" class="blob-line-num js-line-number" data-line-number="1485"></td>
        <td id="LC1485" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1486" class="blob-line-num js-line-number" data-line-number="1486"></td>
        <td id="LC1486" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1487" class="blob-line-num js-line-number" data-line-number="1487"></td>
        <td id="LC1487" class="blob-line-code js-file-line">      <span class="kd">function</span> <span class="nx">langHandlerForExtension</span><span class="p">(</span><span class="nx">extension</span><span class="p">,</span> <span class="nx">source</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1488" class="blob-line-num js-line-number" data-line-number="1488"></td>
        <td id="LC1488" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">extension</span> <span class="o">&amp;&amp;</span> <span class="nx">langHandlerRegistry</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">extension</span><span class="p">)))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1489" class="blob-line-num js-line-number" data-line-number="1489"></td>
        <td id="LC1489" class="blob-line-code js-file-line">          <span class="c1">// Treat it as markup if the first non whitespace character is a &lt; and</span></td>
      </tr>
      <tr>
        <td id="L1490" class="blob-line-num js-line-number" data-line-number="1490"></td>
        <td id="LC1490" class="blob-line-code js-file-line">          <span class="c1">// the last non-whitespace character is a &gt;.</span></td>
      </tr>
      <tr>
        <td id="L1491" class="blob-line-num js-line-number" data-line-number="1491"></td>
        <td id="LC1491" class="blob-line-code js-file-line">          <span class="nx">extension</span> <span class="o">=</span> <span class="sr">/^\s*&lt;/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">source</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L1492" class="blob-line-num js-line-number" data-line-number="1492"></td>
        <td id="LC1492" class="blob-line-code js-file-line">              <span class="o">?</span> <span class="s1">&#39;default-markup&#39;</span></td>
      </tr>
      <tr>
        <td id="L1493" class="blob-line-num js-line-number" data-line-number="1493"></td>
        <td id="LC1493" class="blob-line-code js-file-line">              <span class="o">:</span> <span class="s1">&#39;default-code&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1494" class="blob-line-num js-line-number" data-line-number="1494"></td>
        <td id="LC1494" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1495" class="blob-line-num js-line-number" data-line-number="1495"></td>
        <td id="LC1495" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">langHandlerRegistry</span><span class="p">[</span><span class="nx">extension</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L1496" class="blob-line-num js-line-number" data-line-number="1496"></td>
        <td id="LC1496" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1497" class="blob-line-num js-line-number" data-line-number="1497"></td>
        <td id="LC1497" class="blob-line-code js-file-line">      <span class="nx">registerLangHandler</span><span class="p">(</span><span class="nx">decorateSource</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;default-code&#39;</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1498" class="blob-line-num js-line-number" data-line-number="1498"></td>
        <td id="LC1498" class="blob-line-code js-file-line">      <span class="nx">registerLangHandler</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1499" class="blob-line-num js-line-number" data-line-number="1499"></td>
        <td id="LC1499" class="blob-line-code js-file-line">          <span class="nx">createSimpleLexer</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1500" class="blob-line-num js-line-number" data-line-number="1500"></td>
        <td id="LC1500" class="blob-line-code js-file-line">              <span class="p">[],</span></td>
      </tr>
      <tr>
        <td id="L1501" class="blob-line-num js-line-number" data-line-number="1501"></td>
        <td id="LC1501" class="blob-line-code js-file-line">              <span class="p">[</span></td>
      </tr>
      <tr>
        <td id="L1502" class="blob-line-num js-line-number" data-line-number="1502"></td>
        <td id="LC1502" class="blob-line-code js-file-line">               <span class="p">[</span><span class="nx">PR_PLAIN</span><span class="p">,</span>       <span class="sr">/^[^&lt;?]+/</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1503" class="blob-line-num js-line-number" data-line-number="1503"></td>
        <td id="LC1503" class="blob-line-code js-file-line">               <span class="p">[</span><span class="nx">PR_DECLARATION</span><span class="p">,</span> <span class="sr">/^&lt;!\w[^&gt;]*(?:&gt;|$)/</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1504" class="blob-line-num js-line-number" data-line-number="1504"></td>
        <td id="LC1504" class="blob-line-code js-file-line">               <span class="p">[</span><span class="nx">PR_COMMENT</span><span class="p">,</span>     <span class="sr">/^&lt;\!--[\s\S]*?(?:-\-&gt;|$)/</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1505" class="blob-line-num js-line-number" data-line-number="1505"></td>
        <td id="LC1505" class="blob-line-code js-file-line">               <span class="c1">// Unescaped content in an unknown language</span></td>
      </tr>
      <tr>
        <td id="L1506" class="blob-line-num js-line-number" data-line-number="1506"></td>
        <td id="LC1506" class="blob-line-code js-file-line">               <span class="p">[</span><span class="s1">&#39;lang-&#39;</span><span class="p">,</span>        <span class="sr">/^&lt;\?([\s\S]+?)(?:\?&gt;|$)/</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1507" class="blob-line-num js-line-number" data-line-number="1507"></td>
        <td id="LC1507" class="blob-line-code js-file-line">               <span class="p">[</span><span class="s1">&#39;lang-&#39;</span><span class="p">,</span>        <span class="sr">/^&lt;%([\s\S]+?)(?:%&gt;|$)/</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1508" class="blob-line-num js-line-number" data-line-number="1508"></td>
        <td id="LC1508" class="blob-line-code js-file-line">               <span class="p">[</span><span class="nx">PR_PUNCTUATION</span><span class="p">,</span> <span class="sr">/^(?:&lt;[%?]|[%?]&gt;)/</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1509" class="blob-line-num js-line-number" data-line-number="1509"></td>
        <td id="LC1509" class="blob-line-code js-file-line">               <span class="p">[</span><span class="s1">&#39;lang-&#39;</span><span class="p">,</span>        <span class="sr">/^&lt;xmp\b[^&gt;]*&gt;([\s\S]+?)&lt;\/xmp\b[^&gt;]*&gt;/i</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1510" class="blob-line-num js-line-number" data-line-number="1510"></td>
        <td id="LC1510" class="blob-line-code js-file-line">               <span class="c1">// Unescaped content in javascript.  (Or possibly vbscript).</span></td>
      </tr>
      <tr>
        <td id="L1511" class="blob-line-num js-line-number" data-line-number="1511"></td>
        <td id="LC1511" class="blob-line-code js-file-line">               <span class="p">[</span><span class="s1">&#39;lang-js&#39;</span><span class="p">,</span>      <span class="sr">/^&lt;script\b[^&gt;]*&gt;([\s\S]*?)(&lt;\/script\b[^&gt;]*&gt;)/i</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1512" class="blob-line-num js-line-number" data-line-number="1512"></td>
        <td id="LC1512" class="blob-line-code js-file-line">               <span class="c1">// Contains unescaped stylesheet content</span></td>
      </tr>
      <tr>
        <td id="L1513" class="blob-line-num js-line-number" data-line-number="1513"></td>
        <td id="LC1513" class="blob-line-code js-file-line">               <span class="p">[</span><span class="s1">&#39;lang-css&#39;</span><span class="p">,</span>     <span class="sr">/^&lt;style\b[^&gt;]*&gt;([\s\S]*?)(&lt;\/style\b[^&gt;]*&gt;)/i</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1514" class="blob-line-num js-line-number" data-line-number="1514"></td>
        <td id="LC1514" class="blob-line-code js-file-line">               <span class="p">[</span><span class="s1">&#39;lang-in.tag&#39;</span><span class="p">,</span>  <span class="sr">/^(&lt;\/?[a-z][^&lt;&gt;]*&gt;)/i</span><span class="p">]</span></td>
      </tr>
      <tr>
        <td id="L1515" class="blob-line-num js-line-number" data-line-number="1515"></td>
        <td id="LC1515" class="blob-line-code js-file-line">              <span class="p">]),</span></td>
      </tr>
      <tr>
        <td id="L1516" class="blob-line-num js-line-number" data-line-number="1516"></td>
        <td id="LC1516" class="blob-line-code js-file-line">          <span class="p">[</span><span class="s1">&#39;default-markup&#39;</span><span class="p">,</span> <span class="s1">&#39;htm&#39;</span><span class="p">,</span> <span class="s1">&#39;html&#39;</span><span class="p">,</span> <span class="s1">&#39;mxml&#39;</span><span class="p">,</span> <span class="s1">&#39;xhtml&#39;</span><span class="p">,</span> <span class="s1">&#39;xml&#39;</span><span class="p">,</span> <span class="s1">&#39;xsl&#39;</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1517" class="blob-line-num js-line-number" data-line-number="1517"></td>
        <td id="LC1517" class="blob-line-code js-file-line">      <span class="nx">registerLangHandler</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1518" class="blob-line-num js-line-number" data-line-number="1518"></td>
        <td id="LC1518" class="blob-line-code js-file-line">          <span class="nx">createSimpleLexer</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1519" class="blob-line-num js-line-number" data-line-number="1519"></td>
        <td id="LC1519" class="blob-line-code js-file-line">              <span class="p">[</span></td>
      </tr>
      <tr>
        <td id="L1520" class="blob-line-num js-line-number" data-line-number="1520"></td>
        <td id="LC1520" class="blob-line-code js-file-line">               <span class="p">[</span><span class="nx">PR_PLAIN</span><span class="p">,</span>        <span class="sr">/^[\s]+/</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="s1">&#39; \t\r\n&#39;</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1521" class="blob-line-num js-line-number" data-line-number="1521"></td>
        <td id="LC1521" class="blob-line-code js-file-line">               <span class="p">[</span><span class="nx">PR_ATTRIB_VALUE</span><span class="p">,</span> <span class="sr">/^(?:\&quot;[^\&quot;]*\&quot;?|\&#39;[^\&#39;]*\&#39;?)/</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="s1">&#39;\&quot;\&#39;&#39;</span><span class="p">]</span></td>
      </tr>
      <tr>
        <td id="L1522" class="blob-line-num js-line-number" data-line-number="1522"></td>
        <td id="LC1522" class="blob-line-code js-file-line">               <span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1523" class="blob-line-num js-line-number" data-line-number="1523"></td>
        <td id="LC1523" class="blob-line-code js-file-line">              <span class="p">[</span></td>
      </tr>
      <tr>
        <td id="L1524" class="blob-line-num js-line-number" data-line-number="1524"></td>
        <td id="LC1524" class="blob-line-code js-file-line">               <span class="p">[</span><span class="nx">PR_TAG</span><span class="p">,</span>          <span class="sr">/^^&lt;\/?[a-z](?:[\w.:-]*\w)?|\/?&gt;$/i</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1525" class="blob-line-num js-line-number" data-line-number="1525"></td>
        <td id="LC1525" class="blob-line-code js-file-line">               <span class="p">[</span><span class="nx">PR_ATTRIB_NAME</span><span class="p">,</span>  <span class="sr">/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1526" class="blob-line-num js-line-number" data-line-number="1526"></td>
        <td id="LC1526" class="blob-line-code js-file-line">               <span class="p">[</span><span class="s1">&#39;lang-uq.val&#39;</span><span class="p">,</span>   <span class="sr">/^=\s*([^&gt;\&#39;\&quot;\s]*(?:[^&gt;\&#39;\&quot;\s\/]|\/(?=\s)))/</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1527" class="blob-line-num js-line-number" data-line-number="1527"></td>
        <td id="LC1527" class="blob-line-code js-file-line">               <span class="p">[</span><span class="nx">PR_PUNCTUATION</span><span class="p">,</span>  <span class="sr">/^[=&lt;&gt;\/]+/</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1528" class="blob-line-num js-line-number" data-line-number="1528"></td>
        <td id="LC1528" class="blob-line-code js-file-line">               <span class="p">[</span><span class="s1">&#39;lang-js&#39;</span><span class="p">,</span>       <span class="sr">/^on\w+\s*=\s*\&quot;([^\&quot;]+)\&quot;/i</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1529" class="blob-line-num js-line-number" data-line-number="1529"></td>
        <td id="LC1529" class="blob-line-code js-file-line">               <span class="p">[</span><span class="s1">&#39;lang-js&#39;</span><span class="p">,</span>       <span class="sr">/^on\w+\s*=\s*\&#39;([^\&#39;]+)\&#39;/i</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1530" class="blob-line-num js-line-number" data-line-number="1530"></td>
        <td id="LC1530" class="blob-line-code js-file-line">               <span class="p">[</span><span class="s1">&#39;lang-js&#39;</span><span class="p">,</span>       <span class="sr">/^on\w+\s*=\s*([^\&quot;\&#39;&gt;\s]+)/i</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1531" class="blob-line-num js-line-number" data-line-number="1531"></td>
        <td id="LC1531" class="blob-line-code js-file-line">               <span class="p">[</span><span class="s1">&#39;lang-css&#39;</span><span class="p">,</span>      <span class="sr">/^style\s*=\s*\&quot;([^\&quot;]+)\&quot;/i</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1532" class="blob-line-num js-line-number" data-line-number="1532"></td>
        <td id="LC1532" class="blob-line-code js-file-line">               <span class="p">[</span><span class="s1">&#39;lang-css&#39;</span><span class="p">,</span>      <span class="sr">/^style\s*=\s*\&#39;([^\&#39;]+)\&#39;/i</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L1533" class="blob-line-num js-line-number" data-line-number="1533"></td>
        <td id="LC1533" class="blob-line-code js-file-line">               <span class="p">[</span><span class="s1">&#39;lang-css&#39;</span><span class="p">,</span>      <span class="sr">/^style\s*=\s*([^\&quot;\&#39;&gt;\s]+)/i</span><span class="p">]</span></td>
      </tr>
      <tr>
        <td id="L1534" class="blob-line-num js-line-number" data-line-number="1534"></td>
        <td id="LC1534" class="blob-line-code js-file-line">               <span class="p">]),</span></td>
      </tr>
      <tr>
        <td id="L1535" class="blob-line-num js-line-number" data-line-number="1535"></td>
        <td id="LC1535" class="blob-line-code js-file-line">          <span class="p">[</span><span class="s1">&#39;in.tag&#39;</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1536" class="blob-line-num js-line-number" data-line-number="1536"></td>
        <td id="LC1536" class="blob-line-code js-file-line">      <span class="nx">registerLangHandler</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1537" class="blob-line-num js-line-number" data-line-number="1537"></td>
        <td id="LC1537" class="blob-line-code js-file-line">          <span class="nx">createSimpleLexer</span><span class="p">([],</span> <span class="p">[[</span><span class="nx">PR_ATTRIB_VALUE</span><span class="p">,</span> <span class="sr">/^[\s\S]+/</span><span class="p">]]),</span> <span class="p">[</span><span class="s1">&#39;uq.val&#39;</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1538" class="blob-line-num js-line-number" data-line-number="1538"></td>
        <td id="LC1538" class="blob-line-code js-file-line">      <span class="nx">registerLangHandler</span><span class="p">(</span><span class="nx">sourceDecorator</span><span class="p">({</span></td>
      </tr>
      <tr>
        <td id="L1539" class="blob-line-num js-line-number" data-line-number="1539"></td>
        <td id="LC1539" class="blob-line-code js-file-line">              <span class="s1">&#39;keywords&#39;</span><span class="o">:</span> <span class="nx">CPP_KEYWORDS</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1540" class="blob-line-num js-line-number" data-line-number="1540"></td>
        <td id="LC1540" class="blob-line-code js-file-line">              <span class="s1">&#39;hashComments&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1541" class="blob-line-num js-line-number" data-line-number="1541"></td>
        <td id="LC1541" class="blob-line-code js-file-line">              <span class="s1">&#39;cStyleComments&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1542" class="blob-line-num js-line-number" data-line-number="1542"></td>
        <td id="LC1542" class="blob-line-code js-file-line">              <span class="s1">&#39;types&#39;</span><span class="o">:</span> <span class="nx">C_TYPES</span></td>
      </tr>
      <tr>
        <td id="L1543" class="blob-line-num js-line-number" data-line-number="1543"></td>
        <td id="LC1543" class="blob-line-code js-file-line">            <span class="p">}),</span> <span class="p">[</span><span class="s1">&#39;c&#39;</span><span class="p">,</span> <span class="s1">&#39;cc&#39;</span><span class="p">,</span> <span class="s1">&#39;cpp&#39;</span><span class="p">,</span> <span class="s1">&#39;cxx&#39;</span><span class="p">,</span> <span class="s1">&#39;cyc&#39;</span><span class="p">,</span> <span class="s1">&#39;m&#39;</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1544" class="blob-line-num js-line-number" data-line-number="1544"></td>
        <td id="LC1544" class="blob-line-code js-file-line">      <span class="nx">registerLangHandler</span><span class="p">(</span><span class="nx">sourceDecorator</span><span class="p">({</span></td>
      </tr>
      <tr>
        <td id="L1545" class="blob-line-num js-line-number" data-line-number="1545"></td>
        <td id="LC1545" class="blob-line-code js-file-line">              <span class="s1">&#39;keywords&#39;</span><span class="o">:</span> <span class="s1">&#39;null,true,false&#39;</span></td>
      </tr>
      <tr>
        <td id="L1546" class="blob-line-num js-line-number" data-line-number="1546"></td>
        <td id="LC1546" class="blob-line-code js-file-line">            <span class="p">}),</span> <span class="p">[</span><span class="s1">&#39;json&#39;</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1547" class="blob-line-num js-line-number" data-line-number="1547"></td>
        <td id="LC1547" class="blob-line-code js-file-line">      <span class="nx">registerLangHandler</span><span class="p">(</span><span class="nx">sourceDecorator</span><span class="p">({</span></td>
      </tr>
      <tr>
        <td id="L1548" class="blob-line-num js-line-number" data-line-number="1548"></td>
        <td id="LC1548" class="blob-line-code js-file-line">              <span class="s1">&#39;keywords&#39;</span><span class="o">:</span> <span class="nx">CSHARP_KEYWORDS</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1549" class="blob-line-num js-line-number" data-line-number="1549"></td>
        <td id="LC1549" class="blob-line-code js-file-line">              <span class="s1">&#39;hashComments&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1550" class="blob-line-num js-line-number" data-line-number="1550"></td>
        <td id="LC1550" class="blob-line-code js-file-line">              <span class="s1">&#39;cStyleComments&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1551" class="blob-line-num js-line-number" data-line-number="1551"></td>
        <td id="LC1551" class="blob-line-code js-file-line">              <span class="s1">&#39;verbatimStrings&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1552" class="blob-line-num js-line-number" data-line-number="1552"></td>
        <td id="LC1552" class="blob-line-code js-file-line">              <span class="s1">&#39;types&#39;</span><span class="o">:</span> <span class="nx">C_TYPES</span></td>
      </tr>
      <tr>
        <td id="L1553" class="blob-line-num js-line-number" data-line-number="1553"></td>
        <td id="LC1553" class="blob-line-code js-file-line">            <span class="p">}),</span> <span class="p">[</span><span class="s1">&#39;cs&#39;</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1554" class="blob-line-num js-line-number" data-line-number="1554"></td>
        <td id="LC1554" class="blob-line-code js-file-line">      <span class="nx">registerLangHandler</span><span class="p">(</span><span class="nx">sourceDecorator</span><span class="p">({</span></td>
      </tr>
      <tr>
        <td id="L1555" class="blob-line-num js-line-number" data-line-number="1555"></td>
        <td id="LC1555" class="blob-line-code js-file-line">              <span class="s1">&#39;keywords&#39;</span><span class="o">:</span> <span class="nx">JAVA_KEYWORDS</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1556" class="blob-line-num js-line-number" data-line-number="1556"></td>
        <td id="LC1556" class="blob-line-code js-file-line">              <span class="s1">&#39;cStyleComments&#39;</span><span class="o">:</span> <span class="kc">true</span></td>
      </tr>
      <tr>
        <td id="L1557" class="blob-line-num js-line-number" data-line-number="1557"></td>
        <td id="LC1557" class="blob-line-code js-file-line">            <span class="p">}),</span> <span class="p">[</span><span class="s1">&#39;java&#39;</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1558" class="blob-line-num js-line-number" data-line-number="1558"></td>
        <td id="LC1558" class="blob-line-code js-file-line">      <span class="nx">registerLangHandler</span><span class="p">(</span><span class="nx">sourceDecorator</span><span class="p">({</span></td>
      </tr>
      <tr>
        <td id="L1559" class="blob-line-num js-line-number" data-line-number="1559"></td>
        <td id="LC1559" class="blob-line-code js-file-line">              <span class="s1">&#39;keywords&#39;</span><span class="o">:</span> <span class="nx">SH_KEYWORDS</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1560" class="blob-line-num js-line-number" data-line-number="1560"></td>
        <td id="LC1560" class="blob-line-code js-file-line">              <span class="s1">&#39;hashComments&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1561" class="blob-line-num js-line-number" data-line-number="1561"></td>
        <td id="LC1561" class="blob-line-code js-file-line">              <span class="s1">&#39;multiLineStrings&#39;</span><span class="o">:</span> <span class="kc">true</span></td>
      </tr>
      <tr>
        <td id="L1562" class="blob-line-num js-line-number" data-line-number="1562"></td>
        <td id="LC1562" class="blob-line-code js-file-line">            <span class="p">}),</span> <span class="p">[</span><span class="s1">&#39;bash&#39;</span><span class="p">,</span> <span class="s1">&#39;bsh&#39;</span><span class="p">,</span> <span class="s1">&#39;csh&#39;</span><span class="p">,</span> <span class="s1">&#39;sh&#39;</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1563" class="blob-line-num js-line-number" data-line-number="1563"></td>
        <td id="LC1563" class="blob-line-code js-file-line">      <span class="nx">registerLangHandler</span><span class="p">(</span><span class="nx">sourceDecorator</span><span class="p">({</span></td>
      </tr>
      <tr>
        <td id="L1564" class="blob-line-num js-line-number" data-line-number="1564"></td>
        <td id="LC1564" class="blob-line-code js-file-line">              <span class="s1">&#39;keywords&#39;</span><span class="o">:</span> <span class="nx">PYTHON_KEYWORDS</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1565" class="blob-line-num js-line-number" data-line-number="1565"></td>
        <td id="LC1565" class="blob-line-code js-file-line">              <span class="s1">&#39;hashComments&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1566" class="blob-line-num js-line-number" data-line-number="1566"></td>
        <td id="LC1566" class="blob-line-code js-file-line">              <span class="s1">&#39;multiLineStrings&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1567" class="blob-line-num js-line-number" data-line-number="1567"></td>
        <td id="LC1567" class="blob-line-code js-file-line">              <span class="s1">&#39;tripleQuotedStrings&#39;</span><span class="o">:</span> <span class="kc">true</span></td>
      </tr>
      <tr>
        <td id="L1568" class="blob-line-num js-line-number" data-line-number="1568"></td>
        <td id="LC1568" class="blob-line-code js-file-line">            <span class="p">}),</span> <span class="p">[</span><span class="s1">&#39;cv&#39;</span><span class="p">,</span> <span class="s1">&#39;py&#39;</span><span class="p">,</span> <span class="s1">&#39;python&#39;</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1569" class="blob-line-num js-line-number" data-line-number="1569"></td>
        <td id="LC1569" class="blob-line-code js-file-line">      <span class="nx">registerLangHandler</span><span class="p">(</span><span class="nx">sourceDecorator</span><span class="p">({</span></td>
      </tr>
      <tr>
        <td id="L1570" class="blob-line-num js-line-number" data-line-number="1570"></td>
        <td id="LC1570" class="blob-line-code js-file-line">              <span class="s1">&#39;keywords&#39;</span><span class="o">:</span> <span class="nx">PERL_KEYWORDS</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1571" class="blob-line-num js-line-number" data-line-number="1571"></td>
        <td id="LC1571" class="blob-line-code js-file-line">              <span class="s1">&#39;hashComments&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1572" class="blob-line-num js-line-number" data-line-number="1572"></td>
        <td id="LC1572" class="blob-line-code js-file-line">              <span class="s1">&#39;multiLineStrings&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1573" class="blob-line-num js-line-number" data-line-number="1573"></td>
        <td id="LC1573" class="blob-line-code js-file-line">              <span class="s1">&#39;regexLiterals&#39;</span><span class="o">:</span> <span class="mi">2</span>  <span class="c1">// multiline regex literals</span></td>
      </tr>
      <tr>
        <td id="L1574" class="blob-line-num js-line-number" data-line-number="1574"></td>
        <td id="LC1574" class="blob-line-code js-file-line">            <span class="p">}),</span> <span class="p">[</span><span class="s1">&#39;perl&#39;</span><span class="p">,</span> <span class="s1">&#39;pl&#39;</span><span class="p">,</span> <span class="s1">&#39;pm&#39;</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1575" class="blob-line-num js-line-number" data-line-number="1575"></td>
        <td id="LC1575" class="blob-line-code js-file-line">      <span class="nx">registerLangHandler</span><span class="p">(</span><span class="nx">sourceDecorator</span><span class="p">({</span></td>
      </tr>
      <tr>
        <td id="L1576" class="blob-line-num js-line-number" data-line-number="1576"></td>
        <td id="LC1576" class="blob-line-code js-file-line">              <span class="s1">&#39;keywords&#39;</span><span class="o">:</span> <span class="nx">RUBY_KEYWORDS</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1577" class="blob-line-num js-line-number" data-line-number="1577"></td>
        <td id="LC1577" class="blob-line-code js-file-line">              <span class="s1">&#39;hashComments&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1578" class="blob-line-num js-line-number" data-line-number="1578"></td>
        <td id="LC1578" class="blob-line-code js-file-line">              <span class="s1">&#39;multiLineStrings&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1579" class="blob-line-num js-line-number" data-line-number="1579"></td>
        <td id="LC1579" class="blob-line-code js-file-line">              <span class="s1">&#39;regexLiterals&#39;</span><span class="o">:</span> <span class="kc">true</span></td>
      </tr>
      <tr>
        <td id="L1580" class="blob-line-num js-line-number" data-line-number="1580"></td>
        <td id="LC1580" class="blob-line-code js-file-line">            <span class="p">}),</span> <span class="p">[</span><span class="s1">&#39;rb&#39;</span><span class="p">,</span> <span class="s1">&#39;ruby&#39;</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1581" class="blob-line-num js-line-number" data-line-number="1581"></td>
        <td id="LC1581" class="blob-line-code js-file-line">      <span class="nx">registerLangHandler</span><span class="p">(</span><span class="nx">sourceDecorator</span><span class="p">({</span></td>
      </tr>
      <tr>
        <td id="L1582" class="blob-line-num js-line-number" data-line-number="1582"></td>
        <td id="LC1582" class="blob-line-code js-file-line">              <span class="s1">&#39;keywords&#39;</span><span class="o">:</span> <span class="nx">JSCRIPT_KEYWORDS</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1583" class="blob-line-num js-line-number" data-line-number="1583"></td>
        <td id="LC1583" class="blob-line-code js-file-line">              <span class="s1">&#39;cStyleComments&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1584" class="blob-line-num js-line-number" data-line-number="1584"></td>
        <td id="LC1584" class="blob-line-code js-file-line">              <span class="s1">&#39;regexLiterals&#39;</span><span class="o">:</span> <span class="kc">true</span></td>
      </tr>
      <tr>
        <td id="L1585" class="blob-line-num js-line-number" data-line-number="1585"></td>
        <td id="LC1585" class="blob-line-code js-file-line">            <span class="p">}),</span> <span class="p">[</span><span class="s1">&#39;javascript&#39;</span><span class="p">,</span> <span class="s1">&#39;js&#39;</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1586" class="blob-line-num js-line-number" data-line-number="1586"></td>
        <td id="LC1586" class="blob-line-code js-file-line">      <span class="nx">registerLangHandler</span><span class="p">(</span><span class="nx">sourceDecorator</span><span class="p">({</span></td>
      </tr>
      <tr>
        <td id="L1587" class="blob-line-num js-line-number" data-line-number="1587"></td>
        <td id="LC1587" class="blob-line-code js-file-line">              <span class="s1">&#39;keywords&#39;</span><span class="o">:</span> <span class="nx">COFFEE_KEYWORDS</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1588" class="blob-line-num js-line-number" data-line-number="1588"></td>
        <td id="LC1588" class="blob-line-code js-file-line">              <span class="s1">&#39;hashComments&#39;</span><span class="o">:</span> <span class="mi">3</span><span class="p">,</span>  <span class="c1">// ### style block comments</span></td>
      </tr>
      <tr>
        <td id="L1589" class="blob-line-num js-line-number" data-line-number="1589"></td>
        <td id="LC1589" class="blob-line-code js-file-line">              <span class="s1">&#39;cStyleComments&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1590" class="blob-line-num js-line-number" data-line-number="1590"></td>
        <td id="LC1590" class="blob-line-code js-file-line">              <span class="s1">&#39;multilineStrings&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1591" class="blob-line-num js-line-number" data-line-number="1591"></td>
        <td id="LC1591" class="blob-line-code js-file-line">              <span class="s1">&#39;tripleQuotedStrings&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1592" class="blob-line-num js-line-number" data-line-number="1592"></td>
        <td id="LC1592" class="blob-line-code js-file-line">              <span class="s1">&#39;regexLiterals&#39;</span><span class="o">:</span> <span class="kc">true</span></td>
      </tr>
      <tr>
        <td id="L1593" class="blob-line-num js-line-number" data-line-number="1593"></td>
        <td id="LC1593" class="blob-line-code js-file-line">            <span class="p">}),</span> <span class="p">[</span><span class="s1">&#39;coffee&#39;</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1594" class="blob-line-num js-line-number" data-line-number="1594"></td>
        <td id="LC1594" class="blob-line-code js-file-line">      <span class="nx">registerLangHandler</span><span class="p">(</span><span class="nx">sourceDecorator</span><span class="p">({</span></td>
      </tr>
      <tr>
        <td id="L1595" class="blob-line-num js-line-number" data-line-number="1595"></td>
        <td id="LC1595" class="blob-line-code js-file-line">              <span class="s1">&#39;keywords&#39;</span><span class="o">:</span> <span class="nx">RUST_KEYWORDS</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1596" class="blob-line-num js-line-number" data-line-number="1596"></td>
        <td id="LC1596" class="blob-line-code js-file-line">              <span class="s1">&#39;cStyleComments&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1597" class="blob-line-num js-line-number" data-line-number="1597"></td>
        <td id="LC1597" class="blob-line-code js-file-line">              <span class="s1">&#39;multilineStrings&#39;</span><span class="o">:</span> <span class="kc">true</span></td>
      </tr>
      <tr>
        <td id="L1598" class="blob-line-num js-line-number" data-line-number="1598"></td>
        <td id="LC1598" class="blob-line-code js-file-line">            <span class="p">}),</span> <span class="p">[</span><span class="s1">&#39;rc&#39;</span><span class="p">,</span> <span class="s1">&#39;rs&#39;</span><span class="p">,</span> <span class="s1">&#39;rust&#39;</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1599" class="blob-line-num js-line-number" data-line-number="1599"></td>
        <td id="LC1599" class="blob-line-code js-file-line">      <span class="nx">registerLangHandler</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1600" class="blob-line-num js-line-number" data-line-number="1600"></td>
        <td id="LC1600" class="blob-line-code js-file-line">          <span class="nx">createSimpleLexer</span><span class="p">([],</span> <span class="p">[[</span><span class="nx">PR_STRING</span><span class="p">,</span> <span class="sr">/^[\s\S]+/</span><span class="p">]]),</span> <span class="p">[</span><span class="s1">&#39;regex&#39;</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1601" class="blob-line-num js-line-number" data-line-number="1601"></td>
        <td id="LC1601" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1602" class="blob-line-num js-line-number" data-line-number="1602"></td>
        <td id="LC1602" class="blob-line-code js-file-line">      <span class="kd">function</span> <span class="nx">applyDecorator</span><span class="p">(</span><span class="nx">job</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1603" class="blob-line-num js-line-number" data-line-number="1603"></td>
        <td id="LC1603" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">opt_langExtension</span> <span class="o">=</span> <span class="nx">job</span><span class="p">.</span><span class="nx">langExtension</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1604" class="blob-line-num js-line-number" data-line-number="1604"></td>
        <td id="LC1604" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1605" class="blob-line-num js-line-number" data-line-number="1605"></td>
        <td id="LC1605" class="blob-line-code js-file-line">        <span class="k">try</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1606" class="blob-line-num js-line-number" data-line-number="1606"></td>
        <td id="LC1606" class="blob-line-code js-file-line">          <span class="c1">// Extract tags, and convert the source code to plain text.</span></td>
      </tr>
      <tr>
        <td id="L1607" class="blob-line-num js-line-number" data-line-number="1607"></td>
        <td id="LC1607" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">sourceAndSpans</span> <span class="o">=</span> <span class="nx">extractSourceSpans</span><span class="p">(</span><span class="nx">job</span><span class="p">.</span><span class="nx">sourceNode</span><span class="p">,</span> <span class="nx">job</span><span class="p">.</span><span class="nx">pre</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1608" class="blob-line-num js-line-number" data-line-number="1608"></td>
        <td id="LC1608" class="blob-line-code js-file-line">          <span class="cm">/** Plain text. @type {string} */</span></td>
      </tr>
      <tr>
        <td id="L1609" class="blob-line-num js-line-number" data-line-number="1609"></td>
        <td id="LC1609" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">source</span> <span class="o">=</span> <span class="nx">sourceAndSpans</span><span class="p">.</span><span class="nx">sourceCode</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1610" class="blob-line-num js-line-number" data-line-number="1610"></td>
        <td id="LC1610" class="blob-line-code js-file-line">          <span class="nx">job</span><span class="p">.</span><span class="nx">sourceCode</span> <span class="o">=</span> <span class="nx">source</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1611" class="blob-line-num js-line-number" data-line-number="1611"></td>
        <td id="LC1611" class="blob-line-code js-file-line">          <span class="nx">job</span><span class="p">.</span><span class="nx">spans</span> <span class="o">=</span> <span class="nx">sourceAndSpans</span><span class="p">.</span><span class="nx">spans</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1612" class="blob-line-num js-line-number" data-line-number="1612"></td>
        <td id="LC1612" class="blob-line-code js-file-line">          <span class="nx">job</span><span class="p">.</span><span class="nx">basePos</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1613" class="blob-line-num js-line-number" data-line-number="1613"></td>
        <td id="LC1613" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1614" class="blob-line-num js-line-number" data-line-number="1614"></td>
        <td id="LC1614" class="blob-line-code js-file-line">          <span class="c1">// Apply the appropriate language handler</span></td>
      </tr>
      <tr>
        <td id="L1615" class="blob-line-num js-line-number" data-line-number="1615"></td>
        <td id="LC1615" class="blob-line-code js-file-line">          <span class="nx">langHandlerForExtension</span><span class="p">(</span><span class="nx">opt_langExtension</span><span class="p">,</span> <span class="nx">source</span><span class="p">)(</span><span class="nx">job</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1616" class="blob-line-num js-line-number" data-line-number="1616"></td>
        <td id="LC1616" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1617" class="blob-line-num js-line-number" data-line-number="1617"></td>
        <td id="LC1617" class="blob-line-code js-file-line">          <span class="c1">// Integrate the decorations and tags back into the source code,</span></td>
      </tr>
      <tr>
        <td id="L1618" class="blob-line-num js-line-number" data-line-number="1618"></td>
        <td id="LC1618" class="blob-line-code js-file-line">          <span class="c1">// modifying the sourceNode in place.</span></td>
      </tr>
      <tr>
        <td id="L1619" class="blob-line-num js-line-number" data-line-number="1619"></td>
        <td id="LC1619" class="blob-line-code js-file-line">          <span class="nx">recombineTagsAndDecorations</span><span class="p">(</span><span class="nx">job</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1620" class="blob-line-num js-line-number" data-line-number="1620"></td>
        <td id="LC1620" class="blob-line-code js-file-line">        <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1621" class="blob-line-num js-line-number" data-line-number="1621"></td>
        <td id="LC1621" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">win</span><span class="p">[</span><span class="s1">&#39;console&#39;</span><span class="p">])</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1622" class="blob-line-num js-line-number" data-line-number="1622"></td>
        <td id="LC1622" class="blob-line-code js-file-line">            <span class="nx">console</span><span class="p">[</span><span class="s1">&#39;log&#39;</span><span class="p">](</span><span class="nx">e</span> <span class="o">&amp;&amp;</span> <span class="nx">e</span><span class="p">[</span><span class="s1">&#39;stack&#39;</span><span class="p">]</span> <span class="o">||</span> <span class="nx">e</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1623" class="blob-line-num js-line-number" data-line-number="1623"></td>
        <td id="LC1623" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1624" class="blob-line-num js-line-number" data-line-number="1624"></td>
        <td id="LC1624" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1625" class="blob-line-num js-line-number" data-line-number="1625"></td>
        <td id="LC1625" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1626" class="blob-line-num js-line-number" data-line-number="1626"></td>
        <td id="LC1626" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1627" class="blob-line-num js-line-number" data-line-number="1627"></td>
        <td id="LC1627" class="blob-line-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L1628" class="blob-line-num js-line-number" data-line-number="1628"></td>
        <td id="LC1628" class="blob-line-code js-file-line"><span class="cm">       * Pretty print a chunk of code.</span></td>
      </tr>
      <tr>
        <td id="L1629" class="blob-line-num js-line-number" data-line-number="1629"></td>
        <td id="LC1629" class="blob-line-code js-file-line"><span class="cm">       * @param sourceCodeHtml {string} The HTML to pretty print.</span></td>
      </tr>
      <tr>
        <td id="L1630" class="blob-line-num js-line-number" data-line-number="1630"></td>
        <td id="LC1630" class="blob-line-code js-file-line"><span class="cm">       * @param opt_langExtension {string} The language name to use.</span></td>
      </tr>
      <tr>
        <td id="L1631" class="blob-line-num js-line-number" data-line-number="1631"></td>
        <td id="LC1631" class="blob-line-code js-file-line"><span class="cm">       *     Typically, a filename extension like &#39;cpp&#39; or &#39;java&#39;.</span></td>
      </tr>
      <tr>
        <td id="L1632" class="blob-line-num js-line-number" data-line-number="1632"></td>
        <td id="LC1632" class="blob-line-code js-file-line"><span class="cm">       * @param opt_numberLines {number|boolean} True to number lines,</span></td>
      </tr>
      <tr>
        <td id="L1633" class="blob-line-num js-line-number" data-line-number="1633"></td>
        <td id="LC1633" class="blob-line-code js-file-line"><span class="cm">       *     or the 1-indexed number of the first line in sourceCodeHtml.</span></td>
      </tr>
      <tr>
        <td id="L1634" class="blob-line-num js-line-number" data-line-number="1634"></td>
        <td id="LC1634" class="blob-line-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L1635" class="blob-line-num js-line-number" data-line-number="1635"></td>
        <td id="LC1635" class="blob-line-code js-file-line">      <span class="kd">function</span> <span class="nx">$prettyPrintOne</span><span class="p">(</span><span class="nx">sourceCodeHtml</span><span class="p">,</span> <span class="nx">opt_langExtension</span><span class="p">,</span> <span class="nx">opt_numberLines</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1636" class="blob-line-num js-line-number" data-line-number="1636"></td>
        <td id="LC1636" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">container</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1637" class="blob-line-num js-line-number" data-line-number="1637"></td>
        <td id="LC1637" class="blob-line-code js-file-line">        <span class="c1">// This could cause images to load and onload listeners to fire.</span></td>
      </tr>
      <tr>
        <td id="L1638" class="blob-line-num js-line-number" data-line-number="1638"></td>
        <td id="LC1638" class="blob-line-code js-file-line">        <span class="c1">// E.g. &lt;img onerror=&quot;alert(1337)&quot; src=&quot;nosuchimage.png&quot;&gt;.</span></td>
      </tr>
      <tr>
        <td id="L1639" class="blob-line-num js-line-number" data-line-number="1639"></td>
        <td id="LC1639" class="blob-line-code js-file-line">        <span class="c1">// We assume that the inner HTML is from a trusted source.</span></td>
      </tr>
      <tr>
        <td id="L1640" class="blob-line-num js-line-number" data-line-number="1640"></td>
        <td id="LC1640" class="blob-line-code js-file-line">        <span class="c1">// The pre-tag is required for IE8 which strips newlines from innerHTML</span></td>
      </tr>
      <tr>
        <td id="L1641" class="blob-line-num js-line-number" data-line-number="1641"></td>
        <td id="LC1641" class="blob-line-code js-file-line">        <span class="c1">// when it is injected into a &lt;pre&gt; tag.</span></td>
      </tr>
      <tr>
        <td id="L1642" class="blob-line-num js-line-number" data-line-number="1642"></td>
        <td id="LC1642" class="blob-line-code js-file-line">        <span class="c1">// http://stackoverflow.com/questions/451486/pre-tag-loses-line-breaks-when-setting-innerhtml-in-ie</span></td>
      </tr>
      <tr>
        <td id="L1643" class="blob-line-num js-line-number" data-line-number="1643"></td>
        <td id="LC1643" class="blob-line-code js-file-line">        <span class="c1">// http://stackoverflow.com/questions/195363/inserting-a-newline-into-a-pre-tag-ie-javascript</span></td>
      </tr>
      <tr>
        <td id="L1644" class="blob-line-num js-line-number" data-line-number="1644"></td>
        <td id="LC1644" class="blob-line-code js-file-line">        <span class="nx">container</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="s1">&#39;&lt;pre&gt;&#39;</span> <span class="o">+</span> <span class="nx">sourceCodeHtml</span> <span class="o">+</span> <span class="s1">&#39;&lt;/pre&gt;&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1645" class="blob-line-num js-line-number" data-line-number="1645"></td>
        <td id="LC1645" class="blob-line-code js-file-line">        <span class="nx">container</span> <span class="o">=</span> <span class="nx">container</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1646" class="blob-line-num js-line-number" data-line-number="1646"></td>
        <td id="LC1646" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">opt_numberLines</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1647" class="blob-line-num js-line-number" data-line-number="1647"></td>
        <td id="LC1647" class="blob-line-code js-file-line">          <span class="nx">numberLines</span><span class="p">(</span><span class="nx">container</span><span class="p">,</span> <span class="nx">opt_numberLines</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1648" class="blob-line-num js-line-number" data-line-number="1648"></td>
        <td id="LC1648" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1649" class="blob-line-num js-line-number" data-line-number="1649"></td>
        <td id="LC1649" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1650" class="blob-line-num js-line-number" data-line-number="1650"></td>
        <td id="LC1650" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">job</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1651" class="blob-line-num js-line-number" data-line-number="1651"></td>
        <td id="LC1651" class="blob-line-code js-file-line">          <span class="nx">langExtension</span><span class="o">:</span> <span class="nx">opt_langExtension</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1652" class="blob-line-num js-line-number" data-line-number="1652"></td>
        <td id="LC1652" class="blob-line-code js-file-line">          <span class="nx">numberLines</span><span class="o">:</span> <span class="nx">opt_numberLines</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1653" class="blob-line-num js-line-number" data-line-number="1653"></td>
        <td id="LC1653" class="blob-line-code js-file-line">          <span class="nx">sourceNode</span><span class="o">:</span> <span class="nx">container</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1654" class="blob-line-num js-line-number" data-line-number="1654"></td>
        <td id="LC1654" class="blob-line-code js-file-line">          <span class="nx">pre</span><span class="o">:</span> <span class="mi">1</span></td>
      </tr>
      <tr>
        <td id="L1655" class="blob-line-num js-line-number" data-line-number="1655"></td>
        <td id="LC1655" class="blob-line-code js-file-line">        <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L1656" class="blob-line-num js-line-number" data-line-number="1656"></td>
        <td id="LC1656" class="blob-line-code js-file-line">        <span class="nx">applyDecorator</span><span class="p">(</span><span class="nx">job</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1657" class="blob-line-num js-line-number" data-line-number="1657"></td>
        <td id="LC1657" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">container</span><span class="p">.</span><span class="nx">innerHTML</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1658" class="blob-line-num js-line-number" data-line-number="1658"></td>
        <td id="LC1658" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1659" class="blob-line-num js-line-number" data-line-number="1659"></td>
        <td id="LC1659" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1660" class="blob-line-num js-line-number" data-line-number="1660"></td>
        <td id="LC1660" class="blob-line-code js-file-line">       <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L1661" class="blob-line-num js-line-number" data-line-number="1661"></td>
        <td id="LC1661" class="blob-line-code js-file-line"><span class="cm">        * Find all the {@code &lt;pre&gt;} and {@code &lt;code&gt;} tags in the DOM with</span></td>
      </tr>
      <tr>
        <td id="L1662" class="blob-line-num js-line-number" data-line-number="1662"></td>
        <td id="LC1662" class="blob-line-code js-file-line"><span class="cm">        * {@code class=prettyprint} and prettify them.</span></td>
      </tr>
      <tr>
        <td id="L1663" class="blob-line-num js-line-number" data-line-number="1663"></td>
        <td id="LC1663" class="blob-line-code js-file-line"><span class="cm">        *</span></td>
      </tr>
      <tr>
        <td id="L1664" class="blob-line-num js-line-number" data-line-number="1664"></td>
        <td id="LC1664" class="blob-line-code js-file-line"><span class="cm">        * @param {Function} opt_whenDone called when prettifying is done.</span></td>
      </tr>
      <tr>
        <td id="L1665" class="blob-line-num js-line-number" data-line-number="1665"></td>
        <td id="LC1665" class="blob-line-code js-file-line"><span class="cm">        * @param {HTMLElement|HTMLDocument} opt_root an element or document</span></td>
      </tr>
      <tr>
        <td id="L1666" class="blob-line-num js-line-number" data-line-number="1666"></td>
        <td id="LC1666" class="blob-line-code js-file-line"><span class="cm">        *   containing all the elements to pretty print.</span></td>
      </tr>
      <tr>
        <td id="L1667" class="blob-line-num js-line-number" data-line-number="1667"></td>
        <td id="LC1667" class="blob-line-code js-file-line"><span class="cm">        *   Defaults to {@code document.body}.</span></td>
      </tr>
      <tr>
        <td id="L1668" class="blob-line-num js-line-number" data-line-number="1668"></td>
        <td id="LC1668" class="blob-line-code js-file-line"><span class="cm">        */</span></td>
      </tr>
      <tr>
        <td id="L1669" class="blob-line-num js-line-number" data-line-number="1669"></td>
        <td id="LC1669" class="blob-line-code js-file-line">      <span class="kd">function</span> <span class="nx">$prettyPrint</span><span class="p">(</span><span class="nx">opt_whenDone</span><span class="p">,</span> <span class="nx">opt_root</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1670" class="blob-line-num js-line-number" data-line-number="1670"></td>
        <td id="LC1670" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">root</span> <span class="o">=</span> <span class="nx">opt_root</span> <span class="o">||</span> <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1671" class="blob-line-num js-line-number" data-line-number="1671"></td>
        <td id="LC1671" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">doc</span> <span class="o">=</span> <span class="nx">root</span><span class="p">.</span><span class="nx">ownerDocument</span> <span class="o">||</span> <span class="nb">document</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1672" class="blob-line-num js-line-number" data-line-number="1672"></td>
        <td id="LC1672" class="blob-line-code js-file-line">        <span class="kd">function</span> <span class="nx">byTagName</span><span class="p">(</span><span class="nx">tn</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">root</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="nx">tn</span><span class="p">);</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1673" class="blob-line-num js-line-number" data-line-number="1673"></td>
        <td id="LC1673" class="blob-line-code js-file-line">        <span class="c1">// fetch a list of nodes to rewrite</span></td>
      </tr>
      <tr>
        <td id="L1674" class="blob-line-num js-line-number" data-line-number="1674"></td>
        <td id="LC1674" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">codeSegments</span> <span class="o">=</span> <span class="p">[</span><span class="nx">byTagName</span><span class="p">(</span><span class="s1">&#39;pre&#39;</span><span class="p">),</span> <span class="nx">byTagName</span><span class="p">(</span><span class="s1">&#39;code&#39;</span><span class="p">),</span> <span class="nx">byTagName</span><span class="p">(</span><span class="s1">&#39;xmp&#39;</span><span class="p">)];</span></td>
      </tr>
      <tr>
        <td id="L1675" class="blob-line-num js-line-number" data-line-number="1675"></td>
        <td id="LC1675" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">elements</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L1676" class="blob-line-num js-line-number" data-line-number="1676"></td>
        <td id="LC1676" class="blob-line-code js-file-line">        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">codeSegments</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1677" class="blob-line-num js-line-number" data-line-number="1677"></td>
        <td id="LC1677" class="blob-line-code js-file-line">          <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">n</span> <span class="o">=</span> <span class="nx">codeSegments</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">length</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">n</span><span class="p">;</span> <span class="o">++</span><span class="nx">j</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1678" class="blob-line-num js-line-number" data-line-number="1678"></td>
        <td id="LC1678" class="blob-line-code js-file-line">            <span class="nx">elements</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">codeSegments</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">j</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1679" class="blob-line-num js-line-number" data-line-number="1679"></td>
        <td id="LC1679" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1680" class="blob-line-num js-line-number" data-line-number="1680"></td>
        <td id="LC1680" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1681" class="blob-line-num js-line-number" data-line-number="1681"></td>
        <td id="LC1681" class="blob-line-code js-file-line">        <span class="nx">codeSegments</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1682" class="blob-line-num js-line-number" data-line-number="1682"></td>
        <td id="LC1682" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1683" class="blob-line-num js-line-number" data-line-number="1683"></td>
        <td id="LC1683" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">clock</span> <span class="o">=</span> <span class="nb">Date</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1684" class="blob-line-num js-line-number" data-line-number="1684"></td>
        <td id="LC1684" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">clock</span><span class="p">[</span><span class="s1">&#39;now&#39;</span><span class="p">])</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1685" class="blob-line-num js-line-number" data-line-number="1685"></td>
        <td id="LC1685" class="blob-line-code js-file-line">          <span class="nx">clock</span> <span class="o">=</span> <span class="p">{</span> <span class="s1">&#39;now&#39;</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="o">+</span><span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">);</span> <span class="p">}</span> <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L1686" class="blob-line-num js-line-number" data-line-number="1686"></td>
        <td id="LC1686" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1687" class="blob-line-num js-line-number" data-line-number="1687"></td>
        <td id="LC1687" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1688" class="blob-line-num js-line-number" data-line-number="1688"></td>
        <td id="LC1688" class="blob-line-code js-file-line">        <span class="c1">// The loop is broken into a series of continuations to make sure that we</span></td>
      </tr>
      <tr>
        <td id="L1689" class="blob-line-num js-line-number" data-line-number="1689"></td>
        <td id="LC1689" class="blob-line-code js-file-line">        <span class="c1">// don&#39;t make the browser unresponsive when rewriting a large page.</span></td>
      </tr>
      <tr>
        <td id="L1690" class="blob-line-num js-line-number" data-line-number="1690"></td>
        <td id="LC1690" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">k</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1691" class="blob-line-num js-line-number" data-line-number="1691"></td>
        <td id="LC1691" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">prettyPrintingJob</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1692" class="blob-line-num js-line-number" data-line-number="1692"></td>
        <td id="LC1692" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1693" class="blob-line-num js-line-number" data-line-number="1693"></td>
        <td id="LC1693" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">langExtensionRe</span> <span class="o">=</span> <span class="sr">/\blang(?:uage)?-([\w.]+)(?!\S)/</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1694" class="blob-line-num js-line-number" data-line-number="1694"></td>
        <td id="LC1694" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">prettyPrintRe</span> <span class="o">=</span> <span class="sr">/\bprettyprint\b/</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1695" class="blob-line-num js-line-number" data-line-number="1695"></td>
        <td id="LC1695" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">prettyPrintedRe</span> <span class="o">=</span> <span class="sr">/\bprettyprinted\b/</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1696" class="blob-line-num js-line-number" data-line-number="1696"></td>
        <td id="LC1696" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">preformattedTagNameRe</span> <span class="o">=</span> <span class="sr">/pre|xmp/i</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1697" class="blob-line-num js-line-number" data-line-number="1697"></td>
        <td id="LC1697" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">codeRe</span> <span class="o">=</span> <span class="sr">/^code$/i</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1698" class="blob-line-num js-line-number" data-line-number="1698"></td>
        <td id="LC1698" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">preCodeXmpRe</span> <span class="o">=</span> <span class="sr">/^(?:pre|code|xmp)$/i</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1699" class="blob-line-num js-line-number" data-line-number="1699"></td>
        <td id="LC1699" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">EMPTY</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L1700" class="blob-line-num js-line-number" data-line-number="1700"></td>
        <td id="LC1700" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1701" class="blob-line-num js-line-number" data-line-number="1701"></td>
        <td id="LC1701" class="blob-line-code js-file-line">        <span class="kd">function</span> <span class="nx">doWork</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1702" class="blob-line-num js-line-number" data-line-number="1702"></td>
        <td id="LC1702" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">endTime</span> <span class="o">=</span> <span class="p">(</span><span class="nx">win</span><span class="p">[</span><span class="s1">&#39;PR_SHOULD_USE_CONTINUATION&#39;</span><span class="p">]</span> <span class="o">?</span></td>
      </tr>
      <tr>
        <td id="L1703" class="blob-line-num js-line-number" data-line-number="1703"></td>
        <td id="LC1703" class="blob-line-code js-file-line">                         <span class="nx">clock</span><span class="p">[</span><span class="s1">&#39;now&#39;</span><span class="p">]()</span> <span class="o">+</span> <span class="mi">250</span> <span class="cm">/* ms */</span> <span class="o">:</span></td>
      </tr>
      <tr>
        <td id="L1704" class="blob-line-num js-line-number" data-line-number="1704"></td>
        <td id="LC1704" class="blob-line-code js-file-line">                         <span class="kc">Infinity</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1705" class="blob-line-num js-line-number" data-line-number="1705"></td>
        <td id="LC1705" class="blob-line-code js-file-line">          <span class="k">for</span> <span class="p">(;</span> <span class="nx">k</span> <span class="o">&lt;</span> <span class="nx">elements</span><span class="p">.</span><span class="nx">length</span> <span class="o">&amp;&amp;</span> <span class="nx">clock</span><span class="p">[</span><span class="s1">&#39;now&#39;</span><span class="p">]()</span> <span class="o">&lt;</span> <span class="nx">endTime</span><span class="p">;</span> <span class="nx">k</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1706" class="blob-line-num js-line-number" data-line-number="1706"></td>
        <td id="LC1706" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">cs</span> <span class="o">=</span> <span class="nx">elements</span><span class="p">[</span><span class="nx">k</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L1707" class="blob-line-num js-line-number" data-line-number="1707"></td>
        <td id="LC1707" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1708" class="blob-line-num js-line-number" data-line-number="1708"></td>
        <td id="LC1708" class="blob-line-code js-file-line">            <span class="c1">// Look for a preceding comment like</span></td>
      </tr>
      <tr>
        <td id="L1709" class="blob-line-num js-line-number" data-line-number="1709"></td>
        <td id="LC1709" class="blob-line-code js-file-line">            <span class="c1">// &lt;?prettify lang=&quot;...&quot; linenums=&quot;...&quot;?&gt;</span></td>
      </tr>
      <tr>
        <td id="L1710" class="blob-line-num js-line-number" data-line-number="1710"></td>
        <td id="LC1710" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">attrs</span> <span class="o">=</span> <span class="nx">EMPTY</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1711" class="blob-line-num js-line-number" data-line-number="1711"></td>
        <td id="LC1711" class="blob-line-code js-file-line">            <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1712" class="blob-line-num js-line-number" data-line-number="1712"></td>
        <td id="LC1712" class="blob-line-code js-file-line">              <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">preceder</span> <span class="o">=</span> <span class="nx">cs</span><span class="p">;</span> <span class="p">(</span><span class="nx">preceder</span> <span class="o">=</span> <span class="nx">preceder</span><span class="p">.</span><span class="nx">previousSibling</span><span class="p">);)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1713" class="blob-line-num js-line-number" data-line-number="1713"></td>
        <td id="LC1713" class="blob-line-code js-file-line">                <span class="kd">var</span> <span class="nx">nt</span> <span class="o">=</span> <span class="nx">preceder</span><span class="p">.</span><span class="nx">nodeType</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1714" class="blob-line-num js-line-number" data-line-number="1714"></td>
        <td id="LC1714" class="blob-line-code js-file-line">                <span class="c1">// &lt;?foo?&gt; is parsed by HTML 5 to a comment node (8)</span></td>
      </tr>
      <tr>
        <td id="L1715" class="blob-line-num js-line-number" data-line-number="1715"></td>
        <td id="LC1715" class="blob-line-code js-file-line">                <span class="c1">// like &lt;!--?foo?--&gt;, but in XML is a processing instruction</span></td>
      </tr>
      <tr>
        <td id="L1716" class="blob-line-num js-line-number" data-line-number="1716"></td>
        <td id="LC1716" class="blob-line-code js-file-line">                <span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="p">(</span><span class="nx">nt</span> <span class="o">===</span> <span class="mi">7</span> <span class="o">||</span> <span class="nx">nt</span> <span class="o">===</span> <span class="mi">8</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">preceder</span><span class="p">.</span><span class="nx">nodeValue</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1717" class="blob-line-num js-line-number" data-line-number="1717"></td>
        <td id="LC1717" class="blob-line-code js-file-line">                <span class="k">if</span> <span class="p">(</span><span class="nx">value</span></td>
      </tr>
      <tr>
        <td id="L1718" class="blob-line-num js-line-number" data-line-number="1718"></td>
        <td id="LC1718" class="blob-line-code js-file-line">                    <span class="o">?</span> <span class="o">!</span><span class="sr">/^\??prettify\b/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L1719" class="blob-line-num js-line-number" data-line-number="1719"></td>
        <td id="LC1719" class="blob-line-code js-file-line">                    <span class="o">:</span> <span class="p">(</span><span class="nx">nt</span> <span class="o">!==</span> <span class="mi">3</span> <span class="o">||</span> <span class="sr">/\S/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">preceder</span><span class="p">.</span><span class="nx">nodeValue</span><span class="p">)))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1720" class="blob-line-num js-line-number" data-line-number="1720"></td>
        <td id="LC1720" class="blob-line-code js-file-line">                  <span class="c1">// Skip over white-space text nodes but not others.</span></td>
      </tr>
      <tr>
        <td id="L1721" class="blob-line-num js-line-number" data-line-number="1721"></td>
        <td id="LC1721" class="blob-line-code js-file-line">                  <span class="k">break</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1722" class="blob-line-num js-line-number" data-line-number="1722"></td>
        <td id="LC1722" class="blob-line-code js-file-line">                <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1723" class="blob-line-num js-line-number" data-line-number="1723"></td>
        <td id="LC1723" class="blob-line-code js-file-line">                <span class="k">if</span> <span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1724" class="blob-line-num js-line-number" data-line-number="1724"></td>
        <td id="LC1724" class="blob-line-code js-file-line">                  <span class="nx">attrs</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L1725" class="blob-line-num js-line-number" data-line-number="1725"></td>
        <td id="LC1725" class="blob-line-code js-file-line">                  <span class="nx">value</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1726" class="blob-line-num js-line-number" data-line-number="1726"></td>
        <td id="LC1726" class="blob-line-code js-file-line">                      <span class="sr">/\b(\w+)=([\w:.%+-]+)/g</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1727" class="blob-line-num js-line-number" data-line-number="1727"></td>
        <td id="LC1727" class="blob-line-code js-file-line">                    <span class="kd">function</span> <span class="p">(</span><span class="nx">_</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span> <span class="nx">attrs</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span> <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L1728" class="blob-line-num js-line-number" data-line-number="1728"></td>
        <td id="LC1728" class="blob-line-code js-file-line">                  <span class="k">break</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1729" class="blob-line-num js-line-number" data-line-number="1729"></td>
        <td id="LC1729" class="blob-line-code js-file-line">                <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1730" class="blob-line-num js-line-number" data-line-number="1730"></td>
        <td id="LC1730" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1731" class="blob-line-num js-line-number" data-line-number="1731"></td>
        <td id="LC1731" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1732" class="blob-line-num js-line-number" data-line-number="1732"></td>
        <td id="LC1732" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1733" class="blob-line-num js-line-number" data-line-number="1733"></td>
        <td id="LC1733" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">className</span> <span class="o">=</span> <span class="nx">cs</span><span class="p">.</span><span class="nx">className</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1734" class="blob-line-num js-line-number" data-line-number="1734"></td>
        <td id="LC1734" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">((</span><span class="nx">attrs</span> <span class="o">!==</span> <span class="nx">EMPTY</span> <span class="o">||</span> <span class="nx">prettyPrintRe</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">className</span><span class="p">))</span></td>
      </tr>
      <tr>
        <td id="L1735" class="blob-line-num js-line-number" data-line-number="1735"></td>
        <td id="LC1735" class="blob-line-code js-file-line">                <span class="c1">// Don&#39;t redo this if we&#39;ve already done it.</span></td>
      </tr>
      <tr>
        <td id="L1736" class="blob-line-num js-line-number" data-line-number="1736"></td>
        <td id="LC1736" class="blob-line-code js-file-line">                <span class="c1">// This allows recalling pretty print to just prettyprint elements</span></td>
      </tr>
      <tr>
        <td id="L1737" class="blob-line-num js-line-number" data-line-number="1737"></td>
        <td id="LC1737" class="blob-line-code js-file-line">                <span class="c1">// that have been added to the page since last call.</span></td>
      </tr>
      <tr>
        <td id="L1738" class="blob-line-num js-line-number" data-line-number="1738"></td>
        <td id="LC1738" class="blob-line-code js-file-line">                <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">prettyPrintedRe</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">className</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1739" class="blob-line-num js-line-number" data-line-number="1739"></td>
        <td id="LC1739" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1740" class="blob-line-num js-line-number" data-line-number="1740"></td>
        <td id="LC1740" class="blob-line-code js-file-line">              <span class="c1">// make sure this is not nested in an already prettified element</span></td>
      </tr>
      <tr>
        <td id="L1741" class="blob-line-num js-line-number" data-line-number="1741"></td>
        <td id="LC1741" class="blob-line-code js-file-line">              <span class="kd">var</span> <span class="nx">nested</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1742" class="blob-line-num js-line-number" data-line-number="1742"></td>
        <td id="LC1742" class="blob-line-code js-file-line">              <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">p</span> <span class="o">=</span> <span class="nx">cs</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">;</span> <span class="nx">p</span><span class="p">;</span> <span class="nx">p</span> <span class="o">=</span> <span class="nx">p</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1743" class="blob-line-num js-line-number" data-line-number="1743"></td>
        <td id="LC1743" class="blob-line-code js-file-line">                <span class="kd">var</span> <span class="nx">tn</span> <span class="o">=</span> <span class="nx">p</span><span class="p">.</span><span class="nx">tagName</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1744" class="blob-line-num js-line-number" data-line-number="1744"></td>
        <td id="LC1744" class="blob-line-code js-file-line">                <span class="k">if</span> <span class="p">(</span><span class="nx">preCodeXmpRe</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">tn</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L1745" class="blob-line-num js-line-number" data-line-number="1745"></td>
        <td id="LC1745" class="blob-line-code js-file-line">                    <span class="o">&amp;&amp;</span> <span class="nx">p</span><span class="p">.</span><span class="nx">className</span> <span class="o">&amp;&amp;</span> <span class="nx">prettyPrintRe</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">p</span><span class="p">.</span><span class="nx">className</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1746" class="blob-line-num js-line-number" data-line-number="1746"></td>
        <td id="LC1746" class="blob-line-code js-file-line">                  <span class="nx">nested</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1747" class="blob-line-num js-line-number" data-line-number="1747"></td>
        <td id="LC1747" class="blob-line-code js-file-line">                  <span class="k">break</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1748" class="blob-line-num js-line-number" data-line-number="1748"></td>
        <td id="LC1748" class="blob-line-code js-file-line">                <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1749" class="blob-line-num js-line-number" data-line-number="1749"></td>
        <td id="LC1749" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1750" class="blob-line-num js-line-number" data-line-number="1750"></td>
        <td id="LC1750" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">nested</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1751" class="blob-line-num js-line-number" data-line-number="1751"></td>
        <td id="LC1751" class="blob-line-code js-file-line">                <span class="c1">// Mark done.  If we fail to prettyprint for whatever reason,</span></td>
      </tr>
      <tr>
        <td id="L1752" class="blob-line-num js-line-number" data-line-number="1752"></td>
        <td id="LC1752" class="blob-line-code js-file-line">                <span class="c1">// we shouldn&#39;t try again.</span></td>
      </tr>
      <tr>
        <td id="L1753" class="blob-line-num js-line-number" data-line-number="1753"></td>
        <td id="LC1753" class="blob-line-code js-file-line">                <span class="nx">cs</span><span class="p">.</span><span class="nx">className</span> <span class="o">+=</span> <span class="s1">&#39; prettyprinted&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1754" class="blob-line-num js-line-number" data-line-number="1754"></td>
        <td id="LC1754" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1755" class="blob-line-num js-line-number" data-line-number="1755"></td>
        <td id="LC1755" class="blob-line-code js-file-line">                <span class="c1">// If the classes includes a language extensions, use it.</span></td>
      </tr>
      <tr>
        <td id="L1756" class="blob-line-num js-line-number" data-line-number="1756"></td>
        <td id="LC1756" class="blob-line-code js-file-line">                <span class="c1">// Language extensions can be specified like</span></td>
      </tr>
      <tr>
        <td id="L1757" class="blob-line-num js-line-number" data-line-number="1757"></td>
        <td id="LC1757" class="blob-line-code js-file-line">                <span class="c1">//     &lt;pre class=&quot;prettyprint lang-cpp&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L1758" class="blob-line-num js-line-number" data-line-number="1758"></td>
        <td id="LC1758" class="blob-line-code js-file-line">                <span class="c1">// the language extension &quot;cpp&quot; is used to find a language handler</span></td>
      </tr>
      <tr>
        <td id="L1759" class="blob-line-num js-line-number" data-line-number="1759"></td>
        <td id="LC1759" class="blob-line-code js-file-line">                <span class="c1">// as passed to PR.registerLangHandler.</span></td>
      </tr>
      <tr>
        <td id="L1760" class="blob-line-num js-line-number" data-line-number="1760"></td>
        <td id="LC1760" class="blob-line-code js-file-line">                <span class="c1">// HTML5 recommends that a language be specified using &quot;language-&quot;</span></td>
      </tr>
      <tr>
        <td id="L1761" class="blob-line-num js-line-number" data-line-number="1761"></td>
        <td id="LC1761" class="blob-line-code js-file-line">                <span class="c1">// as the prefix instead.  Google Code Prettify supports both.</span></td>
      </tr>
      <tr>
        <td id="L1762" class="blob-line-num js-line-number" data-line-number="1762"></td>
        <td id="LC1762" class="blob-line-code js-file-line">                <span class="c1">// http://dev.w3.org/html5/spec-author-view/the-code-element.html</span></td>
      </tr>
      <tr>
        <td id="L1763" class="blob-line-num js-line-number" data-line-number="1763"></td>
        <td id="LC1763" class="blob-line-code js-file-line">                <span class="kd">var</span> <span class="nx">langExtension</span> <span class="o">=</span> <span class="nx">attrs</span><span class="p">[</span><span class="s1">&#39;lang&#39;</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L1764" class="blob-line-num js-line-number" data-line-number="1764"></td>
        <td id="LC1764" class="blob-line-code js-file-line">                <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">langExtension</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1765" class="blob-line-num js-line-number" data-line-number="1765"></td>
        <td id="LC1765" class="blob-line-code js-file-line">                  <span class="nx">langExtension</span> <span class="o">=</span> <span class="nx">className</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">langExtensionRe</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1766" class="blob-line-num js-line-number" data-line-number="1766"></td>
        <td id="LC1766" class="blob-line-code js-file-line">                  <span class="c1">// Support &lt;pre class=&quot;prettyprint&quot;&gt;&lt;code class=&quot;language-c&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L1767" class="blob-line-num js-line-number" data-line-number="1767"></td>
        <td id="LC1767" class="blob-line-code js-file-line">                  <span class="kd">var</span> <span class="nx">wrapper</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1768" class="blob-line-num js-line-number" data-line-number="1768"></td>
        <td id="LC1768" class="blob-line-code js-file-line">                  <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">langExtension</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">wrapper</span> <span class="o">=</span> <span class="nx">childContentWrapper</span><span class="p">(</span><span class="nx">cs</span><span class="p">))</span></td>
      </tr>
      <tr>
        <td id="L1769" class="blob-line-num js-line-number" data-line-number="1769"></td>
        <td id="LC1769" class="blob-line-code js-file-line">                      <span class="o">&amp;&amp;</span> <span class="nx">codeRe</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">wrapper</span><span class="p">.</span><span class="nx">tagName</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1770" class="blob-line-num js-line-number" data-line-number="1770"></td>
        <td id="LC1770" class="blob-line-code js-file-line">                    <span class="nx">langExtension</span> <span class="o">=</span> <span class="nx">wrapper</span><span class="p">.</span><span class="nx">className</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">langExtensionRe</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1771" class="blob-line-num js-line-number" data-line-number="1771"></td>
        <td id="LC1771" class="blob-line-code js-file-line">                  <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1772" class="blob-line-num js-line-number" data-line-number="1772"></td>
        <td id="LC1772" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1773" class="blob-line-num js-line-number" data-line-number="1773"></td>
        <td id="LC1773" class="blob-line-code js-file-line">                  <span class="k">if</span> <span class="p">(</span><span class="nx">langExtension</span><span class="p">)</span> <span class="p">{</span> <span class="nx">langExtension</span> <span class="o">=</span> <span class="nx">langExtension</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1774" class="blob-line-num js-line-number" data-line-number="1774"></td>
        <td id="LC1774" class="blob-line-code js-file-line">                <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1775" class="blob-line-num js-line-number" data-line-number="1775"></td>
        <td id="LC1775" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1776" class="blob-line-num js-line-number" data-line-number="1776"></td>
        <td id="LC1776" class="blob-line-code js-file-line">                <span class="kd">var</span> <span class="nx">preformatted</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1777" class="blob-line-num js-line-number" data-line-number="1777"></td>
        <td id="LC1777" class="blob-line-code js-file-line">                <span class="k">if</span> <span class="p">(</span><span class="nx">preformattedTagNameRe</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">cs</span><span class="p">.</span><span class="nx">tagName</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1778" class="blob-line-num js-line-number" data-line-number="1778"></td>
        <td id="LC1778" class="blob-line-code js-file-line">                  <span class="nx">preformatted</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1779" class="blob-line-num js-line-number" data-line-number="1779"></td>
        <td id="LC1779" class="blob-line-code js-file-line">                <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1780" class="blob-line-num js-line-number" data-line-number="1780"></td>
        <td id="LC1780" class="blob-line-code js-file-line">                  <span class="kd">var</span> <span class="nx">currentStyle</span> <span class="o">=</span> <span class="nx">cs</span><span class="p">[</span><span class="s1">&#39;currentStyle&#39;</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L1781" class="blob-line-num js-line-number" data-line-number="1781"></td>
        <td id="LC1781" class="blob-line-code js-file-line">                  <span class="kd">var</span> <span class="nx">defaultView</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">defaultView</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1782" class="blob-line-num js-line-number" data-line-number="1782"></td>
        <td id="LC1782" class="blob-line-code js-file-line">                  <span class="kd">var</span> <span class="nx">whitespace</span> <span class="o">=</span> <span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1783" class="blob-line-num js-line-number" data-line-number="1783"></td>
        <td id="LC1783" class="blob-line-code js-file-line">                      <span class="nx">currentStyle</span></td>
      </tr>
      <tr>
        <td id="L1784" class="blob-line-num js-line-number" data-line-number="1784"></td>
        <td id="LC1784" class="blob-line-code js-file-line">                      <span class="o">?</span> <span class="nx">currentStyle</span><span class="p">[</span><span class="s1">&#39;whiteSpace&#39;</span><span class="p">]</span></td>
      </tr>
      <tr>
        <td id="L1785" class="blob-line-num js-line-number" data-line-number="1785"></td>
        <td id="LC1785" class="blob-line-code js-file-line">                      <span class="o">:</span> <span class="p">(</span><span class="nx">defaultView</span></td>
      </tr>
      <tr>
        <td id="L1786" class="blob-line-num js-line-number" data-line-number="1786"></td>
        <td id="LC1786" class="blob-line-code js-file-line">                         <span class="o">&amp;&amp;</span> <span class="nx">defaultView</span><span class="p">.</span><span class="nx">getComputedStyle</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L1787" class="blob-line-num js-line-number" data-line-number="1787"></td>
        <td id="LC1787" class="blob-line-code js-file-line">                      <span class="o">?</span> <span class="nx">defaultView</span><span class="p">.</span><span class="nx">getComputedStyle</span><span class="p">(</span><span class="nx">cs</span><span class="p">,</span> <span class="kc">null</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L1788" class="blob-line-num js-line-number" data-line-number="1788"></td>
        <td id="LC1788" class="blob-line-code js-file-line">                      <span class="p">.</span><span class="nx">getPropertyValue</span><span class="p">(</span><span class="s1">&#39;white-space&#39;</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L1789" class="blob-line-num js-line-number" data-line-number="1789"></td>
        <td id="LC1789" class="blob-line-code js-file-line">                      <span class="o">:</span> <span class="mi">0</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1790" class="blob-line-num js-line-number" data-line-number="1790"></td>
        <td id="LC1790" class="blob-line-code js-file-line">                  <span class="nx">preformatted</span> <span class="o">=</span> <span class="nx">whitespace</span></td>
      </tr>
      <tr>
        <td id="L1791" class="blob-line-num js-line-number" data-line-number="1791"></td>
        <td id="LC1791" class="blob-line-code js-file-line">                      <span class="o">&amp;&amp;</span> <span class="s1">&#39;pre&#39;</span> <span class="o">===</span> <span class="nx">whitespace</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">3</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1792" class="blob-line-num js-line-number" data-line-number="1792"></td>
        <td id="LC1792" class="blob-line-code js-file-line">                <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1793" class="blob-line-num js-line-number" data-line-number="1793"></td>
        <td id="LC1793" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1794" class="blob-line-num js-line-number" data-line-number="1794"></td>
        <td id="LC1794" class="blob-line-code js-file-line">                <span class="c1">// Look for a class like linenums or linenums:&lt;n&gt; where &lt;n&gt; is the</span></td>
      </tr>
      <tr>
        <td id="L1795" class="blob-line-num js-line-number" data-line-number="1795"></td>
        <td id="LC1795" class="blob-line-code js-file-line">                <span class="c1">// 1-indexed number of the first line.</span></td>
      </tr>
      <tr>
        <td id="L1796" class="blob-line-num js-line-number" data-line-number="1796"></td>
        <td id="LC1796" class="blob-line-code js-file-line">                <span class="kd">var</span> <span class="nx">lineNums</span> <span class="o">=</span> <span class="nx">attrs</span><span class="p">[</span><span class="s1">&#39;linenums&#39;</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L1797" class="blob-line-num js-line-number" data-line-number="1797"></td>
        <td id="LC1797" class="blob-line-code js-file-line">                <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">lineNums</span> <span class="o">=</span> <span class="nx">lineNums</span> <span class="o">===</span> <span class="s1">&#39;true&#39;</span> <span class="o">||</span> <span class="o">+</span><span class="nx">lineNums</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1798" class="blob-line-num js-line-number" data-line-number="1798"></td>
        <td id="LC1798" class="blob-line-code js-file-line">                  <span class="nx">lineNums</span> <span class="o">=</span> <span class="nx">className</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/\blinenums\b(?::(\d+))?/</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1799" class="blob-line-num js-line-number" data-line-number="1799"></td>
        <td id="LC1799" class="blob-line-code js-file-line">                  <span class="nx">lineNums</span> <span class="o">=</span></td>
      </tr>
      <tr>
        <td id="L1800" class="blob-line-num js-line-number" data-line-number="1800"></td>
        <td id="LC1800" class="blob-line-code js-file-line">                    <span class="nx">lineNums</span></td>
      </tr>
      <tr>
        <td id="L1801" class="blob-line-num js-line-number" data-line-number="1801"></td>
        <td id="LC1801" class="blob-line-code js-file-line">                    <span class="o">?</span> <span class="nx">lineNums</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">lineNums</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">length</span></td>
      </tr>
      <tr>
        <td id="L1802" class="blob-line-num js-line-number" data-line-number="1802"></td>
        <td id="LC1802" class="blob-line-code js-file-line">                      <span class="o">?</span> <span class="o">+</span><span class="nx">lineNums</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">:</span> <span class="kc">true</span></td>
      </tr>
      <tr>
        <td id="L1803" class="blob-line-num js-line-number" data-line-number="1803"></td>
        <td id="LC1803" class="blob-line-code js-file-line">                    <span class="o">:</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1804" class="blob-line-num js-line-number" data-line-number="1804"></td>
        <td id="LC1804" class="blob-line-code js-file-line">                <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1805" class="blob-line-num js-line-number" data-line-number="1805"></td>
        <td id="LC1805" class="blob-line-code js-file-line">                <span class="k">if</span> <span class="p">(</span><span class="nx">lineNums</span><span class="p">)</span> <span class="p">{</span> <span class="nx">numberLines</span><span class="p">(</span><span class="nx">cs</span><span class="p">,</span> <span class="nx">lineNums</span><span class="p">,</span> <span class="nx">preformatted</span><span class="p">);</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1806" class="blob-line-num js-line-number" data-line-number="1806"></td>
        <td id="LC1806" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1807" class="blob-line-num js-line-number" data-line-number="1807"></td>
        <td id="LC1807" class="blob-line-code js-file-line">                <span class="c1">// do the pretty printing</span></td>
      </tr>
      <tr>
        <td id="L1808" class="blob-line-num js-line-number" data-line-number="1808"></td>
        <td id="LC1808" class="blob-line-code js-file-line">                <span class="nx">prettyPrintingJob</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1809" class="blob-line-num js-line-number" data-line-number="1809"></td>
        <td id="LC1809" class="blob-line-code js-file-line">                  <span class="nx">langExtension</span><span class="o">:</span> <span class="nx">langExtension</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1810" class="blob-line-num js-line-number" data-line-number="1810"></td>
        <td id="LC1810" class="blob-line-code js-file-line">                  <span class="nx">sourceNode</span><span class="o">:</span> <span class="nx">cs</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1811" class="blob-line-num js-line-number" data-line-number="1811"></td>
        <td id="LC1811" class="blob-line-code js-file-line">                  <span class="nx">numberLines</span><span class="o">:</span> <span class="nx">lineNums</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1812" class="blob-line-num js-line-number" data-line-number="1812"></td>
        <td id="LC1812" class="blob-line-code js-file-line">                  <span class="nx">pre</span><span class="o">:</span> <span class="nx">preformatted</span></td>
      </tr>
      <tr>
        <td id="L1813" class="blob-line-num js-line-number" data-line-number="1813"></td>
        <td id="LC1813" class="blob-line-code js-file-line">                <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L1814" class="blob-line-num js-line-number" data-line-number="1814"></td>
        <td id="LC1814" class="blob-line-code js-file-line">                <span class="nx">applyDecorator</span><span class="p">(</span><span class="nx">prettyPrintingJob</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1815" class="blob-line-num js-line-number" data-line-number="1815"></td>
        <td id="LC1815" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1816" class="blob-line-num js-line-number" data-line-number="1816"></td>
        <td id="LC1816" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1817" class="blob-line-num js-line-number" data-line-number="1817"></td>
        <td id="LC1817" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1818" class="blob-line-num js-line-number" data-line-number="1818"></td>
        <td id="LC1818" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">k</span> <span class="o">&lt;</span> <span class="nx">elements</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1819" class="blob-line-num js-line-number" data-line-number="1819"></td>
        <td id="LC1819" class="blob-line-code js-file-line">            <span class="c1">// finish up in a continuation</span></td>
      </tr>
      <tr>
        <td id="L1820" class="blob-line-num js-line-number" data-line-number="1820"></td>
        <td id="LC1820" class="blob-line-code js-file-line">            <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">doWork</span><span class="p">,</span> <span class="mi">250</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1821" class="blob-line-num js-line-number" data-line-number="1821"></td>
        <td id="LC1821" class="blob-line-code js-file-line">          <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="s1">&#39;function&#39;</span> <span class="o">===</span> <span class="k">typeof</span> <span class="nx">opt_whenDone</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1822" class="blob-line-num js-line-number" data-line-number="1822"></td>
        <td id="LC1822" class="blob-line-code js-file-line">            <span class="nx">opt_whenDone</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L1823" class="blob-line-num js-line-number" data-line-number="1823"></td>
        <td id="LC1823" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1824" class="blob-line-num js-line-number" data-line-number="1824"></td>
        <td id="LC1824" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1825" class="blob-line-num js-line-number" data-line-number="1825"></td>
        <td id="LC1825" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1826" class="blob-line-num js-line-number" data-line-number="1826"></td>
        <td id="LC1826" class="blob-line-code js-file-line">        <span class="nx">doWork</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L1827" class="blob-line-num js-line-number" data-line-number="1827"></td>
        <td id="LC1827" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1828" class="blob-line-num js-line-number" data-line-number="1828"></td>
        <td id="LC1828" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1829" class="blob-line-num js-line-number" data-line-number="1829"></td>
        <td id="LC1829" class="blob-line-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L1830" class="blob-line-num js-line-number" data-line-number="1830"></td>
        <td id="LC1830" class="blob-line-code js-file-line"><span class="cm">       * Contains functions for creating and registering new language handlers.</span></td>
      </tr>
      <tr>
        <td id="L1831" class="blob-line-num js-line-number" data-line-number="1831"></td>
        <td id="LC1831" class="blob-line-code js-file-line"><span class="cm">       * @type {Object}</span></td>
      </tr>
      <tr>
        <td id="L1832" class="blob-line-num js-line-number" data-line-number="1832"></td>
        <td id="LC1832" class="blob-line-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L1833" class="blob-line-num js-line-number" data-line-number="1833"></td>
        <td id="LC1833" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">PR</span> <span class="o">=</span> <span class="nx">win</span><span class="p">[</span><span class="s1">&#39;PR&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1834" class="blob-line-num js-line-number" data-line-number="1834"></td>
        <td id="LC1834" class="blob-line-code js-file-line">            <span class="s1">&#39;createSimpleLexer&#39;</span><span class="o">:</span> <span class="nx">createSimpleLexer</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1835" class="blob-line-num js-line-number" data-line-number="1835"></td>
        <td id="LC1835" class="blob-line-code js-file-line">            <span class="s1">&#39;registerLangHandler&#39;</span><span class="o">:</span> <span class="nx">registerLangHandler</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1836" class="blob-line-num js-line-number" data-line-number="1836"></td>
        <td id="LC1836" class="blob-line-code js-file-line">            <span class="s1">&#39;sourceDecorator&#39;</span><span class="o">:</span> <span class="nx">sourceDecorator</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1837" class="blob-line-num js-line-number" data-line-number="1837"></td>
        <td id="LC1837" class="blob-line-code js-file-line">            <span class="s1">&#39;PR_ATTRIB_NAME&#39;</span><span class="o">:</span> <span class="nx">PR_ATTRIB_NAME</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1838" class="blob-line-num js-line-number" data-line-number="1838"></td>
        <td id="LC1838" class="blob-line-code js-file-line">            <span class="s1">&#39;PR_ATTRIB_VALUE&#39;</span><span class="o">:</span> <span class="nx">PR_ATTRIB_VALUE</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1839" class="blob-line-num js-line-number" data-line-number="1839"></td>
        <td id="LC1839" class="blob-line-code js-file-line">            <span class="s1">&#39;PR_COMMENT&#39;</span><span class="o">:</span> <span class="nx">PR_COMMENT</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1840" class="blob-line-num js-line-number" data-line-number="1840"></td>
        <td id="LC1840" class="blob-line-code js-file-line">            <span class="s1">&#39;PR_DECLARATION&#39;</span><span class="o">:</span> <span class="nx">PR_DECLARATION</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1841" class="blob-line-num js-line-number" data-line-number="1841"></td>
        <td id="LC1841" class="blob-line-code js-file-line">            <span class="s1">&#39;PR_KEYWORD&#39;</span><span class="o">:</span> <span class="nx">PR_KEYWORD</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1842" class="blob-line-num js-line-number" data-line-number="1842"></td>
        <td id="LC1842" class="blob-line-code js-file-line">            <span class="s1">&#39;PR_LITERAL&#39;</span><span class="o">:</span> <span class="nx">PR_LITERAL</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1843" class="blob-line-num js-line-number" data-line-number="1843"></td>
        <td id="LC1843" class="blob-line-code js-file-line">            <span class="s1">&#39;PR_NOCODE&#39;</span><span class="o">:</span> <span class="nx">PR_NOCODE</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1844" class="blob-line-num js-line-number" data-line-number="1844"></td>
        <td id="LC1844" class="blob-line-code js-file-line">            <span class="s1">&#39;PR_PLAIN&#39;</span><span class="o">:</span> <span class="nx">PR_PLAIN</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1845" class="blob-line-num js-line-number" data-line-number="1845"></td>
        <td id="LC1845" class="blob-line-code js-file-line">            <span class="s1">&#39;PR_PUNCTUATION&#39;</span><span class="o">:</span> <span class="nx">PR_PUNCTUATION</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1846" class="blob-line-num js-line-number" data-line-number="1846"></td>
        <td id="LC1846" class="blob-line-code js-file-line">            <span class="s1">&#39;PR_SOURCE&#39;</span><span class="o">:</span> <span class="nx">PR_SOURCE</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1847" class="blob-line-num js-line-number" data-line-number="1847"></td>
        <td id="LC1847" class="blob-line-code js-file-line">            <span class="s1">&#39;PR_STRING&#39;</span><span class="o">:</span> <span class="nx">PR_STRING</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1848" class="blob-line-num js-line-number" data-line-number="1848"></td>
        <td id="LC1848" class="blob-line-code js-file-line">            <span class="s1">&#39;PR_TAG&#39;</span><span class="o">:</span> <span class="nx">PR_TAG</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1849" class="blob-line-num js-line-number" data-line-number="1849"></td>
        <td id="LC1849" class="blob-line-code js-file-line">            <span class="s1">&#39;PR_TYPE&#39;</span><span class="o">:</span> <span class="nx">PR_TYPE</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L1850" class="blob-line-num js-line-number" data-line-number="1850"></td>
        <td id="LC1850" class="blob-line-code js-file-line">            <span class="s1">&#39;prettyPrintOne&#39;</span><span class="o">:</span></td>
      </tr>
      <tr>
        <td id="L1851" class="blob-line-num js-line-number" data-line-number="1851"></td>
        <td id="LC1851" class="blob-line-code js-file-line">               <span class="nx">IN_GLOBAL_SCOPE</span></td>
      </tr>
      <tr>
        <td id="L1852" class="blob-line-num js-line-number" data-line-number="1852"></td>
        <td id="LC1852" class="blob-line-code js-file-line">                 <span class="o">?</span> <span class="p">(</span><span class="nx">win</span><span class="p">[</span><span class="s1">&#39;prettyPrintOne&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">$prettyPrintOne</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L1853" class="blob-line-num js-line-number" data-line-number="1853"></td>
        <td id="LC1853" class="blob-line-code js-file-line">                 <span class="o">:</span> <span class="p">(</span><span class="nx">prettyPrintOne</span> <span class="o">=</span> <span class="nx">$prettyPrintOne</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L1854" class="blob-line-num js-line-number" data-line-number="1854"></td>
        <td id="LC1854" class="blob-line-code js-file-line">            <span class="s1">&#39;prettyPrint&#39;</span><span class="o">:</span> <span class="nx">prettyPrint</span> <span class="o">=</span></td>
      </tr>
      <tr>
        <td id="L1855" class="blob-line-num js-line-number" data-line-number="1855"></td>
        <td id="LC1855" class="blob-line-code js-file-line">               <span class="nx">IN_GLOBAL_SCOPE</span></td>
      </tr>
      <tr>
        <td id="L1856" class="blob-line-num js-line-number" data-line-number="1856"></td>
        <td id="LC1856" class="blob-line-code js-file-line">                 <span class="o">?</span> <span class="p">(</span><span class="nx">win</span><span class="p">[</span><span class="s1">&#39;prettyPrint&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">$prettyPrint</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L1857" class="blob-line-num js-line-number" data-line-number="1857"></td>
        <td id="LC1857" class="blob-line-code js-file-line">                 <span class="o">:</span> <span class="p">(</span><span class="nx">prettyPrint</span> <span class="o">=</span> <span class="nx">$prettyPrint</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L1858" class="blob-line-num js-line-number" data-line-number="1858"></td>
        <td id="LC1858" class="blob-line-code js-file-line">          <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L1859" class="blob-line-num js-line-number" data-line-number="1859"></td>
        <td id="LC1859" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L1860" class="blob-line-num js-line-number" data-line-number="1860"></td>
        <td id="LC1860" class="blob-line-code js-file-line">      <span class="c1">// Make PR available via the Asynchronous Module Definition (AMD) API.</span></td>
      </tr>
      <tr>
        <td id="L1861" class="blob-line-num js-line-number" data-line-number="1861"></td>
        <td id="LC1861" class="blob-line-code js-file-line">      <span class="c1">// Per https://github.com/amdjs/amdjs-api/wiki/AMD:</span></td>
      </tr>
      <tr>
        <td id="L1862" class="blob-line-num js-line-number" data-line-number="1862"></td>
        <td id="LC1862" class="blob-line-code js-file-line">      <span class="c1">// The Asynchronous Module Definition (AMD) API specifies a</span></td>
      </tr>
      <tr>
        <td id="L1863" class="blob-line-num js-line-number" data-line-number="1863"></td>
        <td id="LC1863" class="blob-line-code js-file-line">      <span class="c1">// mechanism for defining modules such that the module and its</span></td>
      </tr>
      <tr>
        <td id="L1864" class="blob-line-num js-line-number" data-line-number="1864"></td>
        <td id="LC1864" class="blob-line-code js-file-line">      <span class="c1">// dependencies can be asynchronously loaded.</span></td>
      </tr>
      <tr>
        <td id="L1865" class="blob-line-num js-line-number" data-line-number="1865"></td>
        <td id="LC1865" class="blob-line-code js-file-line">      <span class="c1">// ...</span></td>
      </tr>
      <tr>
        <td id="L1866" class="blob-line-num js-line-number" data-line-number="1866"></td>
        <td id="LC1866" class="blob-line-code js-file-line">      <span class="c1">// To allow a clear indicator that a global define function (as</span></td>
      </tr>
      <tr>
        <td id="L1867" class="blob-line-num js-line-number" data-line-number="1867"></td>
        <td id="LC1867" class="blob-line-code js-file-line">      <span class="c1">// needed for script src browser loading) conforms to the AMD API,</span></td>
      </tr>
      <tr>
        <td id="L1868" class="blob-line-num js-line-number" data-line-number="1868"></td>
        <td id="LC1868" class="blob-line-code js-file-line">      <span class="c1">// any global define function SHOULD have a property called &quot;amd&quot;</span></td>
      </tr>
      <tr>
        <td id="L1869" class="blob-line-num js-line-number" data-line-number="1869"></td>
        <td id="LC1869" class="blob-line-code js-file-line">      <span class="c1">// whose value is an object. This helps avoid conflict with any</span></td>
      </tr>
      <tr>
        <td id="L1870" class="blob-line-num js-line-number" data-line-number="1870"></td>
        <td id="LC1870" class="blob-line-code js-file-line">      <span class="c1">// other existing JavaScript code that could have defined a define()</span></td>
      </tr>
      <tr>
        <td id="L1871" class="blob-line-num js-line-number" data-line-number="1871"></td>
        <td id="LC1871" class="blob-line-code js-file-line">      <span class="c1">// function that does not conform to the AMD API.</span></td>
      </tr>
      <tr>
        <td id="L1872" class="blob-line-num js-line-number" data-line-number="1872"></td>
        <td id="LC1872" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s2">&quot;function&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">[</span><span class="s1">&#39;amd&#39;</span><span class="p">])</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1873" class="blob-line-num js-line-number" data-line-number="1873"></td>
        <td id="LC1873" class="blob-line-code js-file-line">        <span class="nx">define</span><span class="p">(</span><span class="s2">&quot;google-code-prettify&quot;</span><span class="p">,</span> <span class="p">[],</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1874" class="blob-line-num js-line-number" data-line-number="1874"></td>
        <td id="LC1874" class="blob-line-code js-file-line">          <span class="k">return</span> <span class="nx">PR</span><span class="p">;</span> </td>
      </tr>
      <tr>
        <td id="L1875" class="blob-line-num js-line-number" data-line-number="1875"></td>
        <td id="LC1875" class="blob-line-code js-file-line">        <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L1876" class="blob-line-num js-line-number" data-line-number="1876"></td>
        <td id="LC1876" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1877" class="blob-line-num js-line-number" data-line-number="1877"></td>
        <td id="LC1877" class="blob-line-code js-file-line">    <span class="p">})();</span></td>
      </tr>
      <tr>
        <td id="L1878" class="blob-line-num js-line-number" data-line-number="1878"></td>
        <td id="LC1878" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="nx">prettyPrint</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1879" class="blob-line-num js-line-number" data-line-number="1879"></td>
        <td id="LC1879" class="blob-line-code js-file-line">  <span class="p">})();</span></td>
      </tr>
      <tr>
        <td id="L1880" class="blob-line-num js-line-number" data-line-number="1880"></td>
        <td id="LC1880" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1881" class="blob-line-num js-line-number" data-line-number="1881"></td>
        <td id="LC1881" class="blob-line-code js-file-line">  <span class="c1">// If this script is deferred or async and the document is already</span></td>
      </tr>
      <tr>
        <td id="L1882" class="blob-line-num js-line-number" data-line-number="1882"></td>
        <td id="LC1882" class="blob-line-code js-file-line">  <span class="c1">// loaded we need to wait for language handlers to load before performing</span></td>
      </tr>
      <tr>
        <td id="L1883" class="blob-line-num js-line-number" data-line-number="1883"></td>
        <td id="LC1883" class="blob-line-code js-file-line">  <span class="c1">// any autorun.</span></td>
      </tr>
      <tr>
        <td id="L1884" class="blob-line-num js-line-number" data-line-number="1884"></td>
        <td id="LC1884" class="blob-line-code js-file-line">  <span class="kd">function</span> <span class="nx">onLangsLoaded</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1885" class="blob-line-num js-line-number" data-line-number="1885"></td>
        <td id="LC1885" class="blob-line-code js-file-line">    <span class="k">if</span> <span class="p">(</span><span class="nx">autorun</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1886" class="blob-line-num js-line-number" data-line-number="1886"></td>
        <td id="LC1886" class="blob-line-code js-file-line">      <span class="nx">contentLoaded</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1887" class="blob-line-num js-line-number" data-line-number="1887"></td>
        <td id="LC1887" class="blob-line-code js-file-line">        <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1888" class="blob-line-num js-line-number" data-line-number="1888"></td>
        <td id="LC1888" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">n</span> <span class="o">=</span> <span class="nx">callbacks</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1889" class="blob-line-num js-line-number" data-line-number="1889"></td>
        <td id="LC1889" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">callback</span> <span class="o">=</span> <span class="nx">n</span> <span class="o">?</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1890" class="blob-line-num js-line-number" data-line-number="1890"></td>
        <td id="LC1890" class="blob-line-code js-file-line">            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">n</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1891" class="blob-line-num js-line-number" data-line-number="1891"></td>
        <td id="LC1891" class="blob-line-code js-file-line">              <span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1892" class="blob-line-num js-line-number" data-line-number="1892"></td>
        <td id="LC1892" class="blob-line-code js-file-line">                 <span class="nx">setTimeout</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L1893" class="blob-line-num js-line-number" data-line-number="1893"></td>
        <td id="LC1893" class="blob-line-code js-file-line">                   <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1894" class="blob-line-num js-line-number" data-line-number="1894"></td>
        <td id="LC1894" class="blob-line-code js-file-line">                     <span class="nx">win</span><span class="p">[</span><span class="s1">&#39;exports&#39;</span><span class="p">][</span><span class="nx">callbacks</span><span class="p">[</span><span class="nx">i</span><span class="p">]].</span><span class="nx">apply</span><span class="p">(</span><span class="nx">win</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1895" class="blob-line-num js-line-number" data-line-number="1895"></td>
        <td id="LC1895" class="blob-line-code js-file-line">                   <span class="p">},</span> <span class="mi">0</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1896" class="blob-line-num js-line-number" data-line-number="1896"></td>
        <td id="LC1896" class="blob-line-code js-file-line">               <span class="p">})(</span><span class="nx">i</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1897" class="blob-line-num js-line-number" data-line-number="1897"></td>
        <td id="LC1897" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1898" class="blob-line-num js-line-number" data-line-number="1898"></td>
        <td id="LC1898" class="blob-line-code js-file-line">          <span class="p">}</span> <span class="o">:</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1899" class="blob-line-num js-line-number" data-line-number="1899"></td>
        <td id="LC1899" class="blob-line-code js-file-line">          <span class="nx">prettyPrint</span><span class="p">(</span><span class="nx">callback</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1900" class="blob-line-num js-line-number" data-line-number="1900"></td>
        <td id="LC1900" class="blob-line-code js-file-line">        <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L1901" class="blob-line-num js-line-number" data-line-number="1901"></td>
        <td id="LC1901" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1902" class="blob-line-num js-line-number" data-line-number="1902"></td>
        <td id="LC1902" class="blob-line-code js-file-line">  <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1903" class="blob-line-num js-line-number" data-line-number="1903"></td>
        <td id="LC1903" class="blob-line-code js-file-line">  <span class="nx">checkPendingLanguages</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L1904" class="blob-line-num js-line-number" data-line-number="1904"></td>
        <td id="LC1904" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1905" class="blob-line-num js-line-number" data-line-number="1905"></td>
        <td id="LC1905" class="blob-line-code js-file-line"><span class="p">}());</span></td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.19110s from github-fe127-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-12d5fda141e78e513749dddbc56445fe172cbd9a.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-91c8c29a09ed2b10dc0fe500f8ca17a791e374ae.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

