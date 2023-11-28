const header = document.querySelector("#header");

document.addEventListener('DOMContentLoaded', () => {
    header.innerHTML = `<div class="header-circle"></div>
                        <nav>
                            <ul>
                                <li>
                                    <button>about</button>
                                </li>
                                <li>
                                    <button>projects</button>
                                </li>
                            </ul>
                        </nav>`
},);