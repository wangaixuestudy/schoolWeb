<template>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <span class="navbar-brand glyphicon glyphicon-arrow-left" id="toggleSidebar"></span>
                <a class="navbar-brand" href="index.html">Project name</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">profile</a></li>
                    <li><a href="#">setting</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                           aria-expanded="false">
                            system <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-left">
                            <li><a href="#">help</a></li>
                            <li><a href="#">about</a></li>
                            <li><a href="/main">sign out</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="navbar-form navbar-right">
                    <input class="form-control" placeholder="Search...">
                </form>
            </div>
        </div>
    </nav>
</template>

<script>

    export default {
        name: "Header"
    }
</script>

<style type="text/css">

</style>