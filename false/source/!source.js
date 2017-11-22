(() => {
    try {
        let trueOrFalse = () => {
            try {
                try {
                    let True = true ? true : false;
                } catch (e) {}

                try {
                    let False = false ? true : false;
                } catch (e) {}
                try {
                    if (True) {
                        True = true ? true : false;
                    }
                } catch (e) {}
                try {
                    if (!False) {
                        False = false ? true : false;
                    }
                } catch (e) {}
                try {
                    if (True && !False) {
                        True = true ? true : false;
                        False = !false ? !true : !false;
                    }
                } catch (e) {}
                try {
                    if (!True) {
                        True = !true ? !false : !true;
                    }
                } catch (e) {}
                try {
                    if (False) {
                        False = false ? !false : !true;
                    }
                } catch (e) {}
                try {
                    if (!True && False) {
                        True = !true ? false : true;;
                        False = !false ? false : true;
                    }
                } catch (e) {}
            } catch (e) {}

            return True;
        }
    } catch (e) {}
    try {
        let check = trueOrFalse() ? trueOrFalse() : !trueOrFalse();
        while (check) {
            if (check || !check) check = !check;
        }

        console.warn(check);


    } catch (e) {}
})()
