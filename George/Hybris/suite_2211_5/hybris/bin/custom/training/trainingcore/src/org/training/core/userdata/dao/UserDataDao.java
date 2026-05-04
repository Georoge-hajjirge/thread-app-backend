package org.training.core.hybrisstore.dao;

import de.hybris.platform.servicelayer.internal.dao.Dao;
import org.training.core.model.UserDataModel;

import java.util.List;

public interface UserDataDao extends Dao {

    List<UserDataModel> getHybrisStoreDetails();

}
