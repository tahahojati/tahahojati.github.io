<template>
    <div id="nav_bar">
        <router-link class="logo" rel="index" to="/">
            <img src="../assets/logo.png" alt="Developer, Software Engineer">
            <!-- <img src="../assets/logo_sub.png" alt="Developer, Software Engineer"> -->
        </router-link>
        <nav class="en" :class="navClass" @click="showMobileNav=false">
            <router-link rel="index" to="/"  activeClass="active" exact>
                <i class="fa fa-home">
                </i>
            </router-link>
            <router-link rel="about" to="/about" activeClass="active">
                <i class="fa fa-user">
                </i>
            </router-link>
            <router-link rel="skills" to="/skills" activeClass="active">
                <i class="fa fa-gavel">
                </i>
            </router-link>
            <router-link rel="portfolio" to="/portfolio" activeClass="active">
                <i class="fa fa-camera">
                </i>
            </router-link>
            <router-link rel="contact" to="/contact" activeClass="active">
                <i class="fa fa-envelope">
                </i>
            </router-link>
        </nav>
        <ul>
            <!-- <li>
                <a href="https://twitter.com/JeznachJacek" target="_blank">
                    <i class="fa fa-twitter">
                    </i>
                </a>
            </li> -->
            <li>
                <a href="https://www.linkedin.com/in/taha-pourjalali-100/" target="_blank">
                    <i class="fa fa-linkedin">
                    </i>
                </a>
            </li>     
            <li>
                <a href="https://github.com/tahahojati" target="_blank">
                    <i class="fa fa-github">
                    </i>
                </a>
            </li>
            <!-- <li>
                <a href="https://www.facebook.com/pages/JJ-Front-End-Web-Developer/1065969103428564" target="_blank">
                    <i class="fa fa-facebook">
                    </i>
                </a>
            </li>
            <li>
                <a href="https://jacekjeznach.com/feed/" target="_blank">
                    <i class="fa fa-rss">
                    </i>
                </a>
            </li> -->
        </ul>
        <a id="mobile-link" @click="showMobileNav=!showMobileNav">
            <i class="fa fa-bars">
            </i>
        </a>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                showMobileNav: false,
            };
        },
        computed: {
            navClass(){
                if(this.showMobileNav)
                    return "show";
                else 
                    return ""; 
            }
        }
    }
</script>