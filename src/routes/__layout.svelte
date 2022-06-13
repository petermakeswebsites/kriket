<script lang="ts">
import { page } from '$app/stores';
import Modal from '$lib/components/Modal.svelte';

import { Icon, Styles } from 'sveltestrap';

</script>
<Modal />
<Styles />
<div class="main-container">
    <div class="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px;">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <svg class="main-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>bug</title><g><path d="M33.707,1.293a1,1,0,0,0-1.414,0L28.42,5.166a8.961,8.961,0,0,0-8.84,0L15.707,1.293a1,1,0,0,0-1.414,1.414l3.65,3.65a9,9,0,1,0,12.114,0l3.65-3.65A1,1,0,0,0,33.707,1.293Z" fill="currentColor"></path> <path d="M11,28H2a1,1,0,0,1,0-2h9a1,1,0,0,1,0,2Z" fill="currentColor"></path> <path d="M5,46a1.017,1.017,0,0,1-.243-.03,1,1,0,0,1-.728-1.212L5.621,38.4a6.035,6.035,0,0,1,2.072-3.232l3.682-2.945a1,1,0,0,1,1.25,1.562L8.943,36.727A4.02,4.02,0,0,0,7.561,38.88L5.97,45.242A1,1,0,0,1,5,46Z" fill="currentColor"></path> <path d="M14,22a.994.994,0,0,1-.58-.187L7.742,17.759a5.959,5.959,0,0,1-2.2-2.986L4.052,10.316a1,1,0,1,1,1.9-.632l1.486,4.457A3.986,3.986,0,0,0,8.9,16.132l5.677,4.055A1,1,0,0,1,14,22Z" fill="currentColor"></path> <path d="M46,28H37a1,1,0,0,1,0-2h9a1,1,0,0,1,0,2Z" fill="currentColor"></path> <path d="M43,46a1,1,0,0,1-.969-.758L40.439,38.88a4.02,4.02,0,0,0-1.382-2.153l-3.682-2.946a1,1,0,0,1,1.25-1.562l3.682,2.945A6.041,6.041,0,0,1,42.379,38.4l1.591,6.362a1,1,0,0,1-.728,1.212A1.017,1.017,0,0,1,43,46Z" fill="currentColor"></path> <path d="M34,22a1,1,0,0,1-.582-1.813L39.1,16.132a3.986,3.986,0,0,0,1.47-1.991l1.486-4.457a1,1,0,1,1,1.9.632l-1.485,4.457a5.959,5.959,0,0,1-2.2,2.986l-5.677,4.054A.994.994,0,0,1,34,22Z" fill="currentColor"></path> <path d="M24,47A15.017,15.017,0,0,1,9,32V24a15,15,0,0,1,30,0v8A15.017,15.017,0,0,1,24,47Z" fill="#72c472"></path> <path d="M23,46.949c.332.022.662.051,1,.051s.668-.029,1-.051V8H23Z" fill="currentColor"></path></g></svg>
            <span class="fs-4">Kriket</span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <a href="/" class="nav-link" class:active={$page.url.pathname.length <= 1} class:text-white={!($page.url.pathname.length <= 1)} aria-current="page">
                    <Icon name="house-door-fill" />
                    Home
                </a>
            </li>
            <li>
                <a href="/bug" class="nav-link"  class:active={$page.url.pathname.startsWith("/bug")} class:text-white={!$page.url.pathname.startsWith("/bug")}>
                    <Icon name="bug-fill" />
                    Bugs
                </a>
            </li>
        </ul>
        <!-- <hr>
        <div class="dropdown">
            <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
            <strong>mdo</strong>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
            </ul>
        </div> -->
    </div>
    <div class="main p-3">
        <slot />
    </div>
</div>
<style lang="sass" global>
    html, body, body > div
        height: 100%
    .main-container
        height: 100%
        width: 100%
        display: flex
        .sidebar
        .main
            width: 100%
    .main-icon
        height: 2em
        padding-right: 1em
</style>