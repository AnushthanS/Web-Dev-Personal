function ApplRouter(){
    return(
        <BrowserRouter>
            <Routers>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="Blogs" element={<Blogs />}></Route>
                    <Route path="Contact" element={<Contact />}></Route>
                </Route>
            </Routers>
        </BrowserRouter>
    );
}